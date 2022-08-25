/* 

** INSTRUCTIONS **
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
  smallest = [numbers[0], numbers[1]].sort((a, b) => a - b);
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] < smallest[1]) {
      if (numbers[i] < smallest[0]) {
        smallest[1] = smallest[0];
        smallest[0] = numbers[i];
      } else {
        smallest[1] = numbers[i];
      }
    }
  }
  return smallest[0] + smallest[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]) === 7);
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]) === 7);
