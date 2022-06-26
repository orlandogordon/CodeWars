// My Solution
function powersOfTwo(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

console.log(powersOfTwo(4), [1, 2, 4, 8, 16])

// Best Practice
function powersOfTwo2(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}