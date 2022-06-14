// My Solution
function evenNumbers(array, number) {
  // good luck
  return array.filter((el) => el % 2 === 0).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// Best Practice
const evenNumbers2 = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);
