// My Solution
function findUniq(arr) {
  // do magic
  const length = arr.length;
  if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];
  if (
    arr[length - 1] !== arr[length - 2] &&
    arr[length - 1] !== arr[length - 3]
  )
    return arr[length - 1];

  return arr.filter(
    (el, index, arr) => el !== arr[0] && el !== arr[arr.length - 1]
  )[0];
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0, 0]), 1);
console.log(findUniq([1, 1, 2, 1, 1]), 2);

// Best Practice
function findUniq2(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
