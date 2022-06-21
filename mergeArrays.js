// My Solution
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b).filter((el, index, arr) => el !== arr[index - 1] && el !== [index + 1]);

}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Best Practice
function mergeArrays2(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))));
}