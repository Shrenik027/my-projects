//!Make Sure al asets are loaded
document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.querySelector(".posts-container");
  //get api: https://jsonplaceholder.typicode.com/posts
  const APIUrl = "https://jsonplaceholder.typicode.com/posts";
  async function fetchPost() {
    try {
      //make the http request
      const response = await fetch(APIUrl);
      const posts = await response.json();
      //Clear the loading message
      postContainer.innerHTML = "";

      //Display
      posts.forEach((post) => {
        const postEl = creatPostEl(post);
        postContainer.appendChild(postEl);
      });
    } catch (error) {
      postContainer.innerHTML =
        '<p style = "color:red;text-align:center">Error Loading Post Try Again Later</p>';
    }
  }
  //Create post html element

  function creatPostEl(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;

    const content = document.createElement("p");
    content.classList = "post-body";
    content.textContent = post.body;

    article.appendChild(title);
    article.appendChild(content);

    return article;
  }
  //call

  fetchPost();
});
