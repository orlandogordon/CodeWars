// My Solution
////////////////////////////////////////
// ------------  June 24th   ------------
function longest(s1, s2) {
    // your code
    let arr = s1.split('').concat(s2.split('')).sort()
    let answer = [...new Set(arr)];
    return Array.from(answer).join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")

// Best Practice 
const longest2 = (s1, s2) => [...new Set(s1 + s2)].sort().join('')