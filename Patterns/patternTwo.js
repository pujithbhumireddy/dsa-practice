let n = 4;

for (let i = 0; i < n; i++) {
  let row = " ";

  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = " ";

  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }

  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }

  console.log(row);
}
