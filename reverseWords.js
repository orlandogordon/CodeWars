// My Solution
function reverseWords(str) {
  // Go for it
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("apple"), "elppa");
console.log(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
// Best Practice

function reverseWords2(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
