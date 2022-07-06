// My Solution
function findOdd(arr) {
  arr = arr.sort();
  let counter = 0;
  let answer = arr[0];
  const options = arr.filter((el, index, nums) => el !== nums[index + 1]);
  for (let i = 0; i < options.length; i++) {
    counter = 0;
    arr.forEach((el) => {
      if (el === options[i]) counter++;
    });
    if (counter % 2 !== 0) answer = options[i];
  }
  //happy coding!
  return answer;
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);

// Best Practice
// Option 1
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);

// Option 2
function findOdd3(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
