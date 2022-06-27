// My Solution
function solution(number) {
    if (number < 0) return 0;
    let arr = [0];
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) arr.push(i)
    }
    console.log(arr)
    return arr.reduce((total, currentValue) => currentValue + total)

}

console.log(solution(10), 23)

// Best Practice Solution
function solution2(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}