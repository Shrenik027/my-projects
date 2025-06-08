//My first Nodejs code
console.log("hello from nodejs");

const username = "Shrenik";
const currentTime = new Date();
const hours = currentTime.getHours();

let greeting;

if (hours < 12) {
  greeting = "good Morning";
} else if (hours < 18) {
  greeting = "good Afternoon";
} else {
  greeting = "good evening";
}
console.log(`hello ${username}!, ${greeting}`);
