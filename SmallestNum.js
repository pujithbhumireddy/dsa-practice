// write a function to return smallest number in array

function SmallestNumber(arr) {
  let min = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

let arr = [5, 6, 7, 8, 9, 12, 3, 4];
let sol = SmallestNumber(arr);
console.log(sol);
