// My solution

const uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (!Array.isArray(iterable)) {
    iterable = iterable.split("");
  }
  return iterable.filter((el, index, arr) => el !== arr[index + 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Best Practice
var uniqueInOrder2 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
