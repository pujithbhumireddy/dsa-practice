function PrimeNumberChecker(num) {
  let isprime = true;

  if (num <= 1) {
    isprime = false;
  } else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        isprime = false;
        break;
      }
    }
  }

  if (isprime) {
    console.log(num + " it is a prime number");
  } else {
    console.log(num + " it is not a prime number");
  }
}

PrimeNumberChecker(67);
