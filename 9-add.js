function add(a, b) {
  return a + b;
}

// Get the two arguments and convert to integers
const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[3]);

// Calculate and print the result
const result = add(firstNum, secondNum);
console.log(result);