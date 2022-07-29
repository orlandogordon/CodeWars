// My Solution
function removeSmallest(numbers) {
  let smallest = 0;
  numbers.forEach((el, index) => {
    if (el < numbers[smallest]) smallest = index;
  });
  numbers.splice(smallest, 1);
  return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);

// Best Practice
function removeSmallest2(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
