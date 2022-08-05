// My Solution
function last(x) {
  return x.split(" ").sort((a, b) => {
    a = a.charAt(a.length - 1);
    b = b.charAt(b.length - 1);
    return a.localeCompare(b);
  });
}

console.log(last("what time are we climbing up the volcano"), [
  "time",
  "are",
  "we",
  "the",
  "climbing",
  "volcano",
  "up",
  "what",
]);

// Best Practice
function last2(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

function last3(words) {
  return words
    .split(" ")
    .sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}
