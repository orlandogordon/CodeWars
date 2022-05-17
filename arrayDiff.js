// My first solution
function arrayDiff(a, b) {
  return a.filter((el) => !b.find((el2) => el === el2));
}

console.log(arrayDiff([1, 2, 3, 4], [1, 2]));

// Best Practices
function array_diff2(a, b) {
  return a.filter((e) => !b.includes(e));
}
