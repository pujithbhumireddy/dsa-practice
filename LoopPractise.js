// function SecondLargest(arr) {
//   if (arr.length < 2) {
//     return "the arr must be greater then 2";
//   }

//   let FirstMax = -Infinity;
//   let SecondMax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > FirstMax) {
//       SecondMax = FirstMax;
//       FirstMax = arr[i];
//     } else if (arr[i] > SecondMax && arr[i] != FirstMax) {
//       SecondMax = arr[i];
//     }
//   }

//   return SecondMax;
// }

// let arr = [3, 2, 4, 5, 566, 566, 7, 8, 9];
// console.log(SecondLargest(arr));

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(i + " | " + j);
//   }

//   console.log("_");
// }

for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("--------------------");

for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}

console.log("----------------------");

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }

  console.log();
}
