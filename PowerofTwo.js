function powerOfN(n) {
  if (n == 1) return true;

  if (n < 1 || n % 2 != 0) return false;

  return powerOfN(n / 2);
}

let n = 32;
console.log(powerOfN(n));
