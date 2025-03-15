// Function to calculate sum of odd elements in an array
function sumOfOddElements(array) {
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sumOdd += array[i];
    }
  }
  return sumOdd;
}

// Function to handle user input and display result
function handleUserInput() {
  let size = prompt("Enter size of the array:");
  size = parseInt(size);

  let input = prompt("Enter array elements separated by space:");
  let array = input.split(" ").map(Number);

  // Validate array length
  if (array.length !== size) {
    console.log(
      `Number of elements provided (${array.length}) does not match the specified size (${size}).`
    );
    return;
  }

  // Calculate sum of odd elements
  let sumOdd = sumOfOddElements(array);

  // Display the sum of odd elements
  console.log(`Sum of odd elements: ${sumOdd}`);
}

// Call the function to start processing user input
handleUserInput();
