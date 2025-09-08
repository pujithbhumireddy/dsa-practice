// function merge(arr1, arr2) {
//   let len1 = arr1.length;
//   let len2 = arr2.length;
//   let len = len1 + len2;

//   let arr1Copy = arr1.slice(0, len1);
//   let p1 = 0;
//   let p2 = 0;

//   for (let i = 0; i < len; i++) {
//     if (arr1Copy[p1] < arr2[p2]) {
//       arr1[i] = arr1Copy[p1];
//       p1++;
//     } else {
//       arr1[i] = arr2[p2];
//       p2++;
//     }
//   }
//   return arr1;
// }

function merge(arr1, m, arr2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i] = arr1[p1];
      p1--;
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
  }
  return arr1;
}

let arr1 = [1, 2, 3, 6];
let arr2 = [2, 5, 6];

let m = arr1.length;
let n = arr2.length;

let result = merge(arr1, m, arr2, n);
console.log(result);
