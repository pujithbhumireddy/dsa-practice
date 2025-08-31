function Palindrome(num) {
  let temp = num;

  if (num < 0) {
    return false;
  }

  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return rev == temp;
}

let result = Palindrome(121);
console.log(result);
