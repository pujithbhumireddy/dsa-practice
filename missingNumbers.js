// leetcode number : 268
function finder(arr) {
  let n = arr.length;
  let Total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  return Total - sum;
}

let arr = [0, 3, 4, 1, 5];
let result = finder(arr);
console.log(result);
