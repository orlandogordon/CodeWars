// My solution
function perimeter(n) {
  let fib = [0, 1];
  for (let i = 0; i < n; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return 4 * fib.reduce((acc, curr) => acc + curr);
}

console.log(perimeter(0), 4);
console.log(perimeter(7), 216);
console.log(perimeter(30) === 14098308);

// Best Practice
function perimeter2(n) {
  var fib = [0, 1];
  for (var i = 0; i < n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib.reduce((a, b) => a + b) * 4;
}
