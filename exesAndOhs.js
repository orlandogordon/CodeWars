// My first solution
function XO(str) {
  //code here
  str = str.toLowerCase();
  let arr = Array.from(str).filter((el) => el == "o" || el == "x");
  let o = 0;
  let x = 0;

  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      x += 1;
    } else if (arr[i] == "o") {
      o += 1;
    }
  }
  if (x === o) return true;

  return false;
}

console.log(XO("ooXx"));
console.log(XO("zpzpzpp"));

// Best Practice Solution
const XO2 = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

console.log(XO2("ooXx"));
