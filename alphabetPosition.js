// My Solution
function alphabetPosition(text) {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return text
    .split("")
    .filter((el) => el.toUpperCase() !== el.toLowerCase())
    .map((el) => {
      el = el.toLowerCase();
      return alphabet.findIndex((alph) => alph === el) + 1;
      // return num + 1;
    })
    .join(" ");
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
// Best Practice
function alphabetPosition2(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}
