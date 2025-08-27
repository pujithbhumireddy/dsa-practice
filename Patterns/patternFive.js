let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  let alternator = 1;

  for (let j = 0; j < i + 1; j++) {
    row = row + alternator;

    if (alternator == 1) {
      alternator = 0;
    } else {
      alternator = 1;
    }
  }

  console.log(row);
}
