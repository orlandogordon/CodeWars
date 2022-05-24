// My Solution
function solution(str) {
  strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i + 1] === undefined) strArr[i] = strArr[i] + "_";
    else {
      strArr[i] = strArr[i] + strArr[i + 1];
      strArr.splice(i + 1, 1);
    }
  }
  return strArr;
}

console.log(solution("abc"));
console.log(solution("abcdef"));

// Best Practice
function solution2(str) {
  arr = [];
  for (let i = 0; i < str.length; i += 2) {
    second = str[i + 1] || "_";
    arr.push(str[i] + second);
  }
  return arr;
}
