// function maxer(arr) {
//   let currentMax = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//       currentMax++;

//       if (currentMax > max) {
//         max = currentMax;
//       }
//     } else {
//       currentMax = 0;
//     }
//   }

//   return max;
// }

function maxer(arr) {
  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentMax++;
    } else {
      max = Math.max(max, currentMax);
      currentMax = 0;
    }
  }
  return Math.max(max, currentMax);
}

let arr = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
let result = maxer(arr);
console.log(result);
