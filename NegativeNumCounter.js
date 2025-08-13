// write a function that returns the number of negative numbers in an array

function NegativeNumCounter(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]  < 0) {
      count++;
    }
  }

  return count;
}

let arr = [5, 6, -1, -4, -6, -5, -5, 7, 8, 9, 0];

let solution = NegativeNumCounter(arr);

console.log(solution);
