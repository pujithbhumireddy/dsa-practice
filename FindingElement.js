//write a function that searches for an element in an array and returns the index, if the element is not present just return -1

function IndexFinder(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == element) {
      return index;
    }
  }
  return -1;
}

let arr = [3, 4, 5, 61, 7, 8];
let sol = IndexFinder(arr, 7);
console.log(sol);
