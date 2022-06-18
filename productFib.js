// My Solution
function productFib(prod) {
  // ...
  let fib = [1, 0];
  let answer = [];
  while (true) {
    if (fib[0] * fib[1] === prod) {
      answer.push(fib[1]);
      answer.push(fib[0]);
      answer.push(true);
      break;
    } else if (fib[0] * fib[1] > prod) {
      answer.push(fib[1]);
      answer.push(fib[0]);
      answer.push(false);
      break;
    } else {
      fib.unshift(fib[0] + fib[1]);
    }
  }
  return answer;
}

console.log(productFib(4895), [55, 89, true]);

console.log(productFib(74049690), [6765, 10946, true]);

console.log(productFib(193864606), [10946, 17711, true]);

console.log(productFib(602070), [610, 987, true]);

// Best Practice
function productFib2(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
