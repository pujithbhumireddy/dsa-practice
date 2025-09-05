function ReverseStringArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

let arr = ["h", "e", "l", "l", "o"];

let result = ReverseStringArray(arr);
console.log(result);
