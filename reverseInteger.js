function ReverseInteger(num) {
  let numCopy = num;

  num = Math.abs(num);

  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }
  // for 32 bit limit

  let limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit) {
    return 0;
  }
  return numCopy < 0 ? -rev : rev;
}

let result = ReverseInteger(210);
console.log(result);
