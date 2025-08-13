// write a function that return the largest number in an array

function LargestNumInArr(arr) {
  //   let max = -Infinity;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [5, 66, 77, 88, 100, 45, 67, 23];
// let arr = [-6, -4, -7, -12, -11];
let sol = LargestNumInArr(arr);
console.log(sol);
