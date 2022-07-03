// My Solution
function duplicateCount(text) {
    //...
    counter = 0;
    text = text.toLowerCase();
    letters = text.split('').sort();
    letters.forEach((el, index, arr) => {
        if (el !== arr[index - 1] && el === arr[index + 1]) counter++
    })
    return counter;
}

console.log(duplicateCount('aabbccdd33de11'), 3)

// Best Practice
function duplicateCount2(text) {
    return text.toLowerCase().split('').filter(function (val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}