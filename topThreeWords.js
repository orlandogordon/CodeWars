// My Solution
function topThreeWords(text) {
  // Initialize counter variable and clean up the text string. Create copy of text string with any special characters removed
  let counter = [];
  text = text
    .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, " ")
    .split(" ")
    .filter((el) => el !== "");
  copy = text.sort().filter(function (el, index, ary) {
    return !index || el != ary[index - 1];
  });

  // If there are three or less different words in the string, return the coppied array as is
  if (text[0] === undefined || text.length <= 3) return copy;

  // Count the number of times each word appears in the original string
  for (let i = 0; i < copy.length; i++) {
    counter.push(text.filter((el) => el === copy[i]).length.toString());
  }

  // Sort the "unique words" coppied version of the string based on the mathcing indicies in the counter array
  let indicies = Array.from(counter.keys());
  indicies.sort((a, b) => counter[a].localeCompare(counter[b]));
  let sortedCopy = indicies.map((i) => copy[i]);

  // Return the three words that occured most based on the counter we established earlier
  return sortedCopy.reverse().slice(0, 3);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
  "e",
  "d",
  "a",
]);
console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"]);
console.log(topThreeWords("  , e   .. "), ["e"]);
console.log(topThreeWords(""));
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
  ["e", "ddd", "aa"]
);
console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"]
);

// Best Practice
let topThreeWords2 = (text) => {
  let dict = new Map();
  text.replace(/[A-z']+(?=[ ]+|$)/g, (match) => {
    let word = match.toLowerCase();
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  dict.delete("'");
  return [...dict]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, 3);
};
