function sum(n) {
  if (n < 0) return 0;

  if (arr[n] % 2 !== 0) {
    return arr[n] + sum(n - 1);
  } else {
    return sum(n - 1);
  }
}

let arr = [5, 3, 4, 6, 7, 8];
console.log(sum(arr.length - 1));
