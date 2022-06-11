// My Solution
function twoSum(numbers, target) {
  // ...
  let answer = [];
  let holder;
  for (let i = 0; i < numbers.length; i++) {
    holder = numbers.findIndex((el) => numbers[i] + el === target);
    if (holder !== -1 && holder !== i) {
      answer.push(i, holder);
      i = numbers.length;
    }
  }
  return answer;
}

console.log(twoSum([1, 2, 3], 4));

// Best Practice
function twoSum2(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
