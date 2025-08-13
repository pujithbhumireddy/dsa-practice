// write a function to return second largest number in an array

function SecondLargest(arr) {
  let FirstMax = -Infinity;
  let SecondMax = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > FirstMax) {
      SecondMax = FirstMax;
      FirstMax = arr[i];
    } else if (arr[i] > SecondMax) {
      SecondMax = arr[i];
    }
  }

  return SecondMax;
}

let arr = [5, 66, 77, 88, 34, 22];
let sol = SecondLargest(arr);
console.log(sol);
