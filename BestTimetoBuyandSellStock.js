function seller(price) {
  let min = price[0];
  let maxdif = 0;
  for (let i = 0; i < arr.length; i++) {
    if (price[i] - min > maxdif) {
      maxdif = price[i] - min;
    }

    if (price[i] < min) {
      min = price[i];
    }
  }

  return maxdif;
}

let arr = [7, 1, 5, 3, 6, 4];
let result = seller(arr);
console.log(result);
