const size = parseInt(process.argv[2]);

// Check if conversion was successful
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
}