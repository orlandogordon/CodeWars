// My Solution
function solution(input, markers) {
  input = input.split("\n");
  return input
    .map((el) => {
      markers.forEach(
        (mark) =>
          (el = el.indexOf(mark) === -1 ? el : el.slice(0, el.indexOf(mark)))
      );
      return el.endsWith(" ") ? el.slice(0, -1) : el;
    })
    .join("\n");
}
// console.log(
//   solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// );
console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

////////////////
// Best Practice
function solution2(input, markers) {
  return input
    .split("\n")
    .map((line) =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
    )
    .join("\n");
}

console.log(
  solution2("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
