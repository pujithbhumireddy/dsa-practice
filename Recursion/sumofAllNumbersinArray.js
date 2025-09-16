function sum(n) {
  //   if (n == 0) return arr[0];

  if (n < 0) return 0;

  return arr[n] + sum(n - 1);
}

let arr = [5, 4, 3, 2, 1, 1];
console.log(sum(arr.length - 1));
