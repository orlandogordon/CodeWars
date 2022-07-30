// My Solution
function firstNonRepeatingLetter(s) {
  s = s.split("");
  let options = [...s].map((el) => el.toLowerCase());
  console.log(options, s);
  options = options
    .sort((a, b) => a.localeCompare(b))
    .filter((el, index, arr) => el !== arr[index - 1] && el !== arr[index + 1])
    .map((el) =>
      s.indexOf(el) < 0 ? s.indexOf(el.toUpperCase()) : s.indexOf(el)
    )
    .sort((a, b) => a - b);
  if (options.length === 0) return "";
  return s[options[0]];
}

console.log(firstNonRepeatingLetter("aa"), "a");
console.log(firstNonRepeatingLetter("stress"), "t");
console.log(firstNonRepeatingLetter("sTress"), "t");
console.log(firstNonRepeatingLetter("moonmen"), "e");

// Best Practice
function firstNonRepeatingLetter2(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
