// My Solution
function sevenAte9(str) {
  str = str.split("");
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7")
      str.splice(i, 1);
  }
  return str.join("");
}

console.log(sevenAte9("7979797"), "7777");

// Best Practice (without Regex)
function sevenAte9COPY(str) {
  var strArray = str.split("");
  for (var i = strArray.length - 2; i >= 1; i--) {
    if (
      strArray[i - 1] === "7" &&
      strArray[i] === "9" &&
      strArray[i + 1] === "7"
    )
      strArray.splice(i, 1);
  }

  return strArray.join("");
}
