//http://www.omdbapi.com/?apikey=7b2f0bc7&s=
// http://img.omdbapi.com/?apikey=7b2f0bc7&s=

document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const movieResults = document.getElementById("movieResults");

  movieForm.addEventListener("submit", async (e) => {
    //Prevent Default Brouser settings
    e.preventDefault();
    const movieName = document.getElementById("movieInput").value;

    await fetchMovies(movieName);
  });

  //Search for movies
  async function fetchMovies(movieName) {
    try {
      //Loading
      movieResults.innerHTML =
        '<div class ="loading">Searching Movies...</div>';
      const response = await fetch(
        `https://www.omdbapi.com?apikey=7b2f0bc7&s=${movieName}`
      );
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error(data.Error || "No Movies Found");
      }
      displayMovies(data.Search);
    } catch (error) {
      movieResults.innerHTML = `
      <div class = "error-messagee">
      ${error.message || "Error searching movies. Please try again."}
      </div>
      `;
    }
  }

  //Display all the movies

  function displayMovies(movies) {
    movieResults.innerHTML = `
    <div class="movies-grid">
                  ${movies
                    .map(
                      (movie) => `
                      <div class="movie-card">
                          <img 
                              src="${
                                movie.Poster !== "N/A"
                                  ? movie.Poster
                                  : "https://via.placeholder.com/300x450?text=No+Poster"
                              }" 
                              alt="${movie.Title}"
                              class="movie-poster"
                             
                          >
                          <div class="movie-info">
                              <h3 class="movie-title">${movie.Title}</h3>
                              <div class="movie-year">${movie.Year}</div>
                          </div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
  }
});
