// function fun(num) {
//   if (num == 0) {
//     return;
//   }

//   console.log(num);
//   num = num - 1;
//   fun(num);
// }
// let a = 5;
// fun(a);

function print(nums) {
  if (nums < 1) return;
  console.log(nums);
  print(--nums);
}

let a = 5;
print(a);
