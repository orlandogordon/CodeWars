// My Solutiuon
function takeWhile(arr, pred) {
  // Your code here

  let x = arr.findIndex((el) => !pred(el));
  if (x === -1) return arr;
  return arr.splice(0, x);
}

console.log(takeWhile([2, 4, 10, 100, 64, 78, 92], isEven));

// Predicate Functions
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// Best Practice
const takeWhile2 = (arr, pred) => {
  const index = arr.findIndex((value) => !pred(value));
  return index === -1 ? arr : arr.slice(0, index);
};
