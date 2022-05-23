// My first solution
function duplicateEncode(word) {
  // ...
  word = word.toLowerCase();
  wordArr = word.split("");
  resultArr = word.toLowerCase().split("");
  // console.log(word[0], wordArr[0]);
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = undefined;
    if (wordArr.includes(word[i])) {
      wordArr[i] = word[i];
      resultArr[i] = ")";
    } else {
      wordArr[i] = word[i];
      resultArr[i] = "(";
    }
  }
  return resultArr.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log("G)m)))O))T)))))b(xJ");
console.log(duplicateEncode("G)m)))O))T)))))b(xJ"));
console.log("()()))())()))))((((");

// Best Practice
function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
