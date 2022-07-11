// My Solution
function solution(string) {
  return string
    .split("")
    .map((el, index, arr) => {
      if (el === el.toUpperCase()) {
        return " " + el;
      } else {
        return el;
      }
    })
    .join("");
}

console.log(solution("camelCasing"), "camel Casing");

// Best Practice
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
