// My solution
function rgb(r, g, b) {
  // complete this function
  let hex = "";
  let arr = [r, g, b];
  arr.map((el) => {
    el > 255 ? (el = 255) : el < 0 ? (el = 0) : el;
    el = el.toString(16);
    console.log(el.length);
    el = el.length == 1 ? el + "0" : el;
    console.log(el + "0");
    hex += el;
  });
  hex = hex.toUpperCase();
  return hex;
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));

// Best Practice
function rgb2(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}

console.log(rgb2(255, 255, 255));
console.log(rgb2(255, 255, 300));
console.log(rgb2(0, 0, 0));
console.log(rgb2(148, 0, 211));
