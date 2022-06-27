// My Solution
var replaceDots = function (str) {
    return str.split('.').join('-');
}

console.log(replaceDots("one.two.three"), "one-two-three")

// Best Practice 
var replaceDots2 = function (str) {
    return str.replace(/\./g, '-');
}