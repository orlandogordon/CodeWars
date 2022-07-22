// My Solution
function maskify(cc) {
  return cc
    .split("")
    .map((el, index) => {
      if (index < cc.length - 4) return "#";
      else return el;
    })
    .join("");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("hey there paul"), "##########paul");

// Best Practice
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
