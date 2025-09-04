//find the number of unique elements in the array and return the noof unique elements in the array

function findNoofUniqueElements(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  return x + 1;
}

let arr = [0, 0, 0, 1, 2, 2, 3, 4, 5, 6, 5, 3, 3, 2, 6, 7];
let result = findNoofUniqueElements(arr);
console.log(result);
