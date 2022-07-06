// My Solution
function getMiddle(s) {
    //Code goes here!
    s = s.split('')
    midpoint = s.length / 2;
    console.log(midpoint)
    let answer = '';

    if (s.length % 2 === 0) {
        answer = answer + s[midpoint - 1] + s[midpoint]
    } else {
        midpoint = Math.floor(midpoint)
        answer = answer + s[midpoint]
    }

    return answer;

}

console.log(getMiddle('tests'), 'es')

// Best Practice
function getMiddle2(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}