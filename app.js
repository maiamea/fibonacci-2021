'use strict';
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     if (n === 1) {
//       return 1;
//     }
//   }
//   return fib(n-1) + fib(n-2);
// }

// const number = process.argv[2] || 0;
// console.log(`${number}番目のフィボナッチ数は${fib(number)}です。`);

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n-1) + fib(n-2);
  memo.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(`${i}番目のフィボナッチ数は${fib(i)}です。`);
}