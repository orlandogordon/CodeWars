// My Solution
function moveZeros(arr) {
  let counter = 0;
  arr.forEach((el) => {
    if (el === 0) counter++;
  });
  arr = arr.filter((el) => el !== 0);
  for (let i = 0; i < counter; i++) arr.push(0);

  return arr;
}

console.log(
  moveZeros([1, 2, 0, 0, 1, 0, 1, 0, 3, 0, 1]),
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);

// Best Practice
var moveZeros2 = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
