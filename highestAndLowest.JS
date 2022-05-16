function highAndLow(numbers) {
  // ...
  numbers = numbers
    .split(" ")
    .map((el) => +el)
    .sort((first, second) => first - second);
  const smallest = `${numbers.shift()}`;
  const largest = `${numbers.pop()}`;
  let result = "";
  if (largest == "undefined") {
    result = smallest.concat(" ", smallest);
  } else {
    result = largest.concat(" ", smallest);
  }
  return result;
}
