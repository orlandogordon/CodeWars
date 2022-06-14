// My Solution
function stringSuffix(s) {
  // Complete
  let suffix = s.split("").slice(1);
  const iterations = suffix.length;
  let score = s.length;
  s = s.split("");
  for (let i = 0; i <= iterations; i++) {
    let a = 0;
    while (s[a] === suffix[a]) {
      score++;
      a++;
    }
    suffix.shift();
  }
  return score;
}
console.log(stringSuffix("aa"), 3);
console.log(stringSuffix("abc"), 3);
console.log(stringSuffix("ababaa"), 11);
console.log(stringSuffix("apple"), 5);
console.log(stringSuffix("aaaa"), 10);

// Best Practice
function stringSuffix2(s) {
  return s.split("").reduce(function (c, v, i) {
    var t = 1;
    return (
      c +
      s
        .slice(i)
        .split("")
        .reduce(function (c, v, i) {
          if (s[i] != v) t = 0;
          return c + (t ? +(s[i] == v) : 0);
        }, 0)
    );
  }, 0);
}
