// My Solution
function anagrams(word, words) {
    word = word.split('').sort().join('');
    let temp = '';
    let answer = [];
    for (let i = 0; i < words.length; i++) {
        temp = words[i].split('').sort().join('');
        if (word === temp) answer.push(words[i])
    }
    return answer;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])

// Best Practice 
function anagrams2(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function (v) { return word == v.split('').sort().join(''); });
}

