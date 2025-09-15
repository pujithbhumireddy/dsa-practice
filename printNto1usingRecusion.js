function print(nums) {
  if (nums == 0) return 0;

  console.log(nums);
  print(--nums);
}

let a = 5;
print(a);
