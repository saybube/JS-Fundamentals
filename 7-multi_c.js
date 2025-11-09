const x = parseInt(process.argv[2]);

// Check if conversion was successful
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Loop x times and print "C is fun"
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}