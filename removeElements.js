function removeEle(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

let arr = [3, 4, 5, 6, 7, 2, 3, 4, 5, 3];
let val = 3;

let result = removeEle(arr, val);
console.log(result);
