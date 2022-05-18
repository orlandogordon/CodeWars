// My first solution
function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(" ")
    .map((el) => (el.length >= 5 ? el.split("").reverse().join("") : el))
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));

// Best Practices Solution
function spinWords2(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
