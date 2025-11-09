// Get the first argument
const firstArg = process.argv[2];

// Convert to integer
const num = parseInt(firstArg);

// Check if conversion was successful
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}