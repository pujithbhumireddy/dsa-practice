/* leetcode problem 509 to find the fibonacci number at that specific index there are two methods iteration and recursion*/

// solving using iteration
function fibonacci(n) {
  let f = [0, 1];
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

let n = 7;
console.log(fibonacci(n));

//solving using recursion

// function fibo(x) {
//   if (x <= 1) return x;
//   return fibo(x - 1) + fibo(x - 2);
// }

// let a = 5;
// console.log(fibo(a));
