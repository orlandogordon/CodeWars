// My Solution
String.prototype.camelCase = function () {
  return this.split(" ")
    .map((el) => {
      if (el === "") return el;
      el = el.split("");
      el[0] = el[0].toUpperCase();
      return el.join("");
    })
    .join("");
};

console.log("test case".camelCase(), "TestCase");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");

// Best Practice
String.prototype.camelCase2 = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};
