// My Solution
function findOdd(arr) {
  arr = arr.sort();
  let counter = 0;
  let answer = arr[0];
  options = arr.filter((el, index, nums) => el !== nums[index + 1]);
  for (let i = 0; i < options.length; i++) {
    arr.forEach((el) => {
      if (el === options[i]) counter++;
    });
    if (counter % 2 !== 0) answer = options[i];
  }
  //happy coding!
  return answer;
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
