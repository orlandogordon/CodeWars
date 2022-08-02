// My Solution
function abbrevName(name) {
  return name
    .split("")
    .filter(
      (el, index, arr) => arr[index - 1] === undefined || arr[index - 1] === " "
    )
    .join(".")
    .toUpperCase();
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("P favuzzi"), "P.F");
// Best Practice
function abbrevName2(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
