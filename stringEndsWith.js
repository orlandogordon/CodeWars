// My Solution
function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
// Best Practice
function solution2(str, ending) {
  return str.endsWith(ending);
}
