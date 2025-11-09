function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the first argument and convert to integer
const num = parseInt(process.argv[2]);

// Compute and print the factorial
const result = factorial(num);
console.log(result);