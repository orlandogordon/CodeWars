// My Solution
function findShort(s) {
  return s
    .split(" ")
    .map((el) => el.length)
    .sort((a, b) => a - b)[0];
}

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);

// Best Practice
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
