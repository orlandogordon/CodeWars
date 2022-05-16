function digPow(n, p) {
  // ...
  n = `${n}`;
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    let digit = +n[i];
    digit = digit ** p;
    p++;
    total += digit;
  }
  let k = -1;
  if (total % +n === 0) {
    k = total / +n;
  }
  return k;
}

console.log(digPow(81, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
//  Best practice
function digPow2(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
