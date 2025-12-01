//Sync = blocking code
//Async = non Blocking Code

// console.log("4");
// console.log("1");
// console.log("2");
// console.log("3");
// function blockingTask() {
//   console.log("step1: Start a lonng running Task");

//   //simulate a blocking task

//   const startTime = Date.now();
//   while (Date.now() - startTime < 5000) {}
//   console.log("step2: Long Running Task Finished");
// }
// console.log("Before Blocking Task");

// blockingTask();
// console.log("After Blocking Task");

// console.log("task1");

// setTimeout(() => {
//   console.log("task 2 (delay)");
// }, 2000);

// console.log("Task 3");

//Weather App
//API (Mimic)
//Our Frontend app

// function fetchData(callback) {
//   //operation api (mimic)
//   console.log("fetching weather data");
//   setTimeout(() => {
//     console.log("data Fetched Succesfully!");
//     callback();
//   }, 2000);
// }

// function processData() {
//   console.log("Processing weather data to display temp and conditions");
// }

// fetchData(processData);

//! Components of HTTP Request

//HTTP: Hypertext Transfer Protocol
//?.Method(HTTP Verb)
//GET-Retrieve Data
//POST- ending data to server
//PUT-Update
//?URL-Uniform Resource Locator //API
//?Headers
//?Body

//HTTP Client
//fetch - default
//axios - third party

//Making First HTTP Request

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json().then((posts) => {
//       console.log("post fetched succesfully", posts);
//     });
//   })
//   .catch((error) => {
//     console.log("error Fetching posts", error);
//   });

//Fetxch User Details-api /https://jsonplaceholder.typicode.com/users/2

function fetchUserData(callback) {
  //make http request
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then((response) => {
      return response.json().then((userData) => {
        console.log("User details fetched");
        callback(userData.id);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

//fetch users post - https://jsonplaceholder.typicode.com/posts?userId=2

function fetchUserPost(userId) {
  //make http request
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      return response.json().then((posts) => {
        console.log("Users Posts", posts);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
// fetchUserData(fetchUserPost);

// !PROMISE

// !Create a promise
// const myPromise = new Promise((resolve, reject) => {
//   //perform async task
//   let success = true;
//   if (success) {
//     resolve("Operation Successfull"); //fullfilled
//   } else {
//     reject("Operation Failed");
//   }
// });
// !Consume the promise
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Operation called");
//   });

//!Promise example

//!Create the promise

//!Consume Promise
// const fetchDataPromise = fetch("https://jsonplaceholder.typicode.com/albums");

// //consume
// fetchDataPromise
//   .then((response) => {
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => {
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Writing Above code using Async Await

//! Async Await

async function fetchAlbums() {
  try {
    //success
    const albumsRes = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );

    const albums = await albumsRes.json();
    console.log(albums);
  } catch (error) {
    // faliure
    console.log(error);
  }
}

fetchAlbums();
