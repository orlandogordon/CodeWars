// My Solution 
function getCount(str) {
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    str = str.split('');
    str.forEach(el => {
        if (vowels.includes(el)) counter++
    })
    return counter;
}

// Best Practice
function getCount2(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}