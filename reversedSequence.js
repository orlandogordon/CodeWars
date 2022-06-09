// My Solution
const reverseSeq = (n) => {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};

console.log(reverseSeq(5));

// Best Practice
const reverseSeq2 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
