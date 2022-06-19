// My Solution
function validParentheses(parens) {
  // your code here ..
  parens = parens.split("");

  let left = parens.filter((el) => el === "(");
  let right = parens.filter((el) => el === ")");

  if (left.length !== right.length) return false;

  if (parens.indexOf("(") > parens.indexOf(")")) return false;
  if (parens.reverse().indexOf(")") > parens.reverse().indexOf("("))
    return false;

  while (parens[0] === "(") {
    parens = parens.slice(1);
    parens.splice(parens.indexOf(")"), 1);
    console.log(parens.join(""), parens.length);
  }
  if (parens.length > 0) return false;

  return true;
}

// console.log(validParentheses("("), false);
// console.log(validParentheses("(())((()())())"), true);
// console.log(validParentheses("())"), true);
// console.log(validParentheses(")()()()("), false);
console.log(validParentheses("())(()"), false);

// Best Practice
function validParentheses2(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
