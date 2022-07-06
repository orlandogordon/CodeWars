////////////////////////////////////////
// ------------  June 22nd   ------------
function getPINs(observed) {
  // TODO: This is your job, detective!
  let options = [];
  let adjacentDigits = {};
  let digit;
  observed = observed.split("").map((el) => +el);
  observed.forEach((el) => (adjacentDigits[el] = []));
  for (let i = 0; i < Object.keys(adjacentDigits).length; i++) {
    digit = +Object.keys(adjacentDigits)[i];

    adjacentDigits[digit].push(digit + 3);
    adjacentDigits[digit].push(digit - 3);

    if ([1, 4, 7].includes(digit)) {
      // First collumn
      adjacentDigits[digit].push(digit + 1);
      adjacentDigits[digit] = adjacentDigits[digit].filter(
        (el) => el > 0 && el < 10
      );
    } else if ([2, 5, 8].includes(digit)) {
      // Second collumn
      adjacentDigits[digit].push(digit + 1);
      adjacentDigits[digit].push(digit - 1);
      adjacentDigits[digit] = adjacentDigits[digit].filter(
        (el) => el > 0 && el < 10
      );
    } else if ([3, 6, 9].includes(digit)) {
      // Third collumn
      adjacentDigits[digit].push(digit - 1);
      adjacentDigits[digit] = adjacentDigits[digit].filter(
        (el) => el > 0 && el < 10
      );
    } else if (digit === 0) {
      // digit equals 0
      adjacentDigits[digit].push(8);
    } else {
      console.log("Invalid number");
    }

    if (digit === 8) adjacentDigits[digit].push(0);
  }

  // console.log(Object.keys(adjacentDigits).length)
  console.log(adjacentDigits);
  // console.log(observed)
}

// console.log(getPINs("8"), ["5", "7", "8", "9", "0"]);
// console.log(getPINs('11'), ["11", "22", "44", "12", "21", "14", "41", "24", "42"])
// console.log(getPINs('369'), ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"])

////////////////////////////////////////
// ------------  July 5th   ------------
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

////////////////////////////////////////
// ------------  July 4th🎆🎆   ------------
// function findOdd(arr) {
//   arr = arr.sort();
//   let counter = 0;
//   let answer = arr[0];
//   options = arr.filter((el, index, nums) => el !== nums[index + 1]);
//   for (let i = 0; i < options.length; i++) {
//     arr.forEach((el) => {
//       if (el === options[i]) counter++;
//     });
//     if (counter % 2 !== 0) answer = options[i];
//   }
//   //happy coding!
//   return answer;
// }

// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
////////////////////////////////////////
// ------------  July 3rd   ------------
// function duplicateCount(text) {
//   //...
//   counter = 0;
//   text = text.toLowerCase();
//   letters = text.split('').sort();
//   letters.forEach((el, index, arr) => {
//     if (el !== arr[index - 1] && el === arr[index + 1]) counter++
//   })
//   return counter;

// }

// console.log(duplicateCount('aabbccdd33de11'), 3)
////////////////////////////////////////
// ------------  July 2nd   ------------
// function getCount(str) {
//   let counter = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   str = str.split('');
//   str.forEach(el => {
//     if (vowels.includes(el)) counter++
//   })
//   return counter;
// }

// console.log(getCount('abbbeefffggghhoovv'), 5)
////////////////////////////////////////
// ------------  July 1st   ------------
// Solution coming on next push
// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   let temp = '';
//   let answer = [];
//   for (let i = 0; i < words.length; i++) {
//     temp = words[i].split('').sort().join('');
//     if (word === temp) answer.push(words[i])
//   }
//   return answer;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
////////////////////////////////////////
// ------------  June 29th   ------------
// function generateHashtag(str) {
//   let hashtag =
//     "#" +
//     str
//       .split(" ")
//       .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
//       .join("");

//   if (hashtag.length > 140 || hashtag.length === 1) return false;
//   return hashtag;
// }

// console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice");
// console.log(
//   generateHashtag(
//     "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
//   ),
//   false
// );
////////////////////////////////////////
// ------------  June 28th   ------------
// function moveZeros(arr) {
//   let counter = 0;
//   arr.forEach((el) => {
//     if (el === 0) counter++;
//   });
//   arr = arr.filter((el) => el !== 0);
//   for (let i = 0; i < counter; i++) arr.push(0);

//   return arr;
// }

// console.log(
//   moveZeros([1, 2, 0, 0, 1, 0, 1, 0, 3, 0, 1]),
//   [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// );
////////////////////////////////////////
// ------------  June 27th   ------------
// function solution(number) {
//   if (number < 0) return 0;
//   let arr = [0];
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) arr.push(i)
//   }
//   console.log(arr)
//   return arr.reduce((total, currentValue) => currentValue + total)

// }

// console.log(solution(10), 23)
////////////////////////////////////////
// ------------  June 26th   ------------
// var replaceDots = function (str) {
//   return str.split('.').join('-');
// }

// console.log(replaceDots("one.two.three"), "one-two-three")
////////////////////////////////////////
// ------------  June 25th   ------------
// function powersOfTwo(n) {
//   let arr = []
//   for (let i = 0; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// console.log(powersOfTwo(4), [1, 2, 4, 8, 16])
////////////////////////////////////////
// ------------  June 24th   ------------
// function longest(s1, s2) {
//   // your code
//   let arr = s1.split('').concat(s2.split('')).sort()
//   let answer = [...new Set(arr)];
//   return Array.from(answer).join('');
// }

// console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")

////////////////////////////////////////
// ------------  June 21st   ------------
// function sevenAte9(str) {
//   str = str.split("");
//   for (let i = 1; i < str.length - 1; i++) {
//     if (str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7")
//       str.splice(i, 1);
//   }
//   return str.join("");
// }

// console.log(sevenAte9("7979797"), "7777");
////////////////////////////////////////
// ------------  June 20th   ------------
// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).sort((a, b) => a - b).filter((el, index, arr) => el !== arr[index - 1] && el !== [index + 1]);

// }

// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
////////////////////////////////////////
// ------------  June 19th   ------------
// function validParentheses(parens) {
//   // your code here ..
//   parens = parens.split("");

//   let left = parens.filter((el) => el === "(");
//   let right = parens.filter((el) => el === ")");

//   if (left.length !== right.length) return false;

//   if (parens.indexOf("(") > parens.indexOf(")")) return false;
//   if (parens.reverse().indexOf(")") > parens.reverse().indexOf("("))
//     return false;

//   while (parens[0] === "(") {
//     parens = parens.slice(1);
//     parens.splice(parens.indexOf(")"), 1);
//     console.log(parens.join(""), parens.length);
//   }
//   if (parens.length > 0) return false;

//   return true;
// }

// // console.log(validParentheses("("), false);
// // console.log(validParentheses("(())((()())())"), true);
// // console.log(validParentheses("())"), true);
// // console.log(validParentheses(")()()()("), false);
// console.log(validParentheses("())(()"), false);
////////////////////////////////////////
// ------------  June 18th   ------------
// function productFib(prod) {
//   // ...
//   let fib = [1, 0];
//   let answer = [];
//   while (true) {
//     if (fib[0] * fib[1] === prod) {
//       answer.push(fib[1]);
//       answer.push(fib[0]);
//       answer.push(true);
//       break;
//     } else if (fib[0] * fib[1] > prod) {
//       answer.push(fib[1]);
//       answer.push(fib[0]);
//       answer.push(false);
//       break;
//     } else {
//       fib.unshift(fib[0] + fib[1]);
//     }
//   }
//   return answer;
// }

// console.log(productFib(4895), [55, 89, true]);

// console.log(productFib(74049690), [6765, 10946, true]);

// console.log(productFib(193864606), [10946, 17711, true]);

// console.log(productFib(602070), [610, 987, true]);
////////////////////////////////////////
// ------------  June 16th   ------------
// function topThreeWords(text) {
//   // Initialize counter variable and clean up the text string. Create copy of text string with any special characters removed
//   let counter = [];
//   text = text
//     .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, " ")
//     .split(" ")
//     .filter((el) => el !== "");
//   copy = text.sort().filter(function (el, index, ary) {
//     return !index || el != ary[index - 1];
//   });

//   // If there are three or less different words in the string, return the coppied array as is
//   if (text[0] === undefined || text.length <= 3) return copy;

//   // Count the number of times each word appears in the original string
//   for (let i = 0; i < copy.length; i++) {
//     counter.push(text.filter((el) => el === copy[i]).length.toString());
//   }

//   // Sort the "unique words" coppied version of the string based on the mathcing indicies in the counter array
//   let indicies = Array.from(counter.keys());
//   indicies.sort((a, b) => counter[a].localeCompare(counter[b]));
//   let sortedCopy = indicies.map((i) => copy[i]);

//   // Return the three words that occured most based on the counter we established earlier
//   return sortedCopy.reverse().slice(0, 3);
// }

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
//   "e",
//   "d",
//   "a",
// ]);
// console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"]);
// console.log(topThreeWords("  , e   .. "), ["e"]);
// console.log(topThreeWords(""));
// console.log(
//   topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
//   ["e", "ddd", "aa"]
// );
// console.log(
//   topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`),
//   ["a", "of", "on"]
// );
////////////////////////////////////////
// ------------  June 14th   ------------
// function stringSuffix(s) {
//   // Complete
//   let suffix = s.split("").slice(1);
//   const iterations = suffix.length;
//   let score = s.length;
//   s = s.split("");
//   for (let i = 0; i <= iterations; i++) {
//     let a = 0;
//     while (s[a] === suffix[a]) {
//       score++;
//       a++;
//     }
//     suffix.shift();
//   }
//   return score;
// }
// console.log(stringSuffix("aa"), 3);
// console.log(stringSuffix("abc"), 3);
// console.log(stringSuffix("ababaa"), 11);
// console.log(stringSuffix("apple"), 5);
// console.log(stringSuffix("aaaa"), 10);
////////////////////////////////////////
// ------------  June 12th   ------------
// function evenNumbers(array, number) {
//   // good luck
//   return array.filter((el) => el % 2 === 0).slice(-number);
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
////////////////////////////////////////
// ------------  June 11th   ------------
// function twoSum(numbers, target) {
//   // ...
//   let answer = [];
//   let holder;
//   for (let i = 0; i < numbers.length; i++) {
//     holder = numbers.findIndex((el) => numbers[i] + el === target);
//     if (holder !== -1 && holder !== i) {
//       answer.push(i, holder);
//       i = numbers.length;
//     }
//   }
//   return answer;
// }

// console.log(twoSum([1, 2, 3], 4));
////////////////////////////////////////
// ------------  June 10th   ------------
// function solution(str, ending) {
//   // TODO: complete
//   return str.endsWith(ending);
// }

// console.log(solution("abc", "bc"));
// console.log(solution("abc", "d"));
////////////////////////////////////////
// ------------  June 9th   ------------
// const reverseSeq = (n) => {
//   let arr = [];
//   while (n > 0) {
//     arr.push(n);
//     n--;
//   }
//   return arr;
// };

// console.log(reverseSeq(5));
////////////////////////////////////////
// ------------  June 8th   ------------
// function stringToArray(string) {
//   return string.split(" ");
// }

// console.log(stringToArray("I love arrays they are my favorite"));

////////////////////////////////////////
// ------------  June 7th   ------------
// function noSpace(x) {
//   return x.split(" ").join("");
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
////////////////////////////////////////
// ------------  June 3rd   ------------
// function takeWhile(arr, pred) {
//   // Your code here

//   let x = arr.findIndex((el) => !pred(el));
//   if (x === -1) return arr;
//   return arr.splice(0, x);
// }

// console.log(takeWhile([2, 4, 10, 100, 64, 78, 92], isEven));

// // Predicate Functions
// function isEven(num) {
//   return num % 2 === 0;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }
////////////////////////////////////////
// ------------  June 2nd   ------------
// function removeEveryOther(arr) {
//   //your code here
//   return arr.filter((el, index, arr) => index % 2 === 0);
// }

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
// console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));

////////////////////////////////////////
// ------------  June 1st   ------------
// function even_or_odd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(even_or_odd(2));
// console.log(even_or_odd(5));
// console.log(even_or_odd(34));
////////////////////////////////////////
// ------------  MAY 31st   ------------
// function dblLinear(n) {
//   let answer = [1];
//   for (let i = 1; i <= n; i++) {
//     answer.push(3 * i + 1);
//     answer.push(2 * i + 1);
//   }
//   return answer;
// }

// console.log(dblLinear(1));
// console.log(dblLinear(2));
// console.log(dblLinear(10));
// console.log(dblLinear(11));

// Failed attempt

////////////////////////////////////////
// ------------  MAY 28th   ------------
// const snail = function (array) {
//   // enjoy
//   const n = array.length - 1;
//   const array2 = array[0].map((el, index, arr) => (index < n ? el : null));
//   array2.pop();
//   console.log(array, array2);
//   array.forEach((el) => array2.push(el[n]));
//   // for (let a = n - 1; a > 0; a--) {
//   //   for (let i = 1; i < n; i++) {
//   //     array2.push(array[i][a]);
//   //   }
//   // }
//   return array2;
// };
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
////////////////////////////////////////
// ------------  MAY 26th   ------------
// function solution(input, markers) {
//   input = input.split("\n");
//   return input
//     .map((el) => {
//       markers.forEach(
//         (mark) =>
//           (el = el.indexOf(mark) === -1 ? el : el.slice(0, el.indexOf(mark)))
//       );
//       return el.endsWith(" ") ? el.slice(0, -1) : el;
//     })
//     .join("\n");
// }

// // console.log(
// //   solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // );
// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );
////////////////////////////////////////
// ------------  MAY 25th   ------------
// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array
//   if (!Array.isArray(iterable)) {
//     iterable = iterable.split("");
//   }
// for (let i = 0; i < iterable.length; i++) {
//   if (iterable[i] === iterable[i + 1] || iterable[i] === iterable[i - 1]) {
//     iterable.splice(i, 1);
//     i--;
//   }
// }
// return iterable;
//   return iterable.filter((el, index, arr) => el !== arr[index + 1]);
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// console.log(typeof ["a", "b", "c"] == "string");

////////////////////////////////////////
// ------------  MAY 24th   ------------
// function solution(str) {
//   strArr = str.split("");
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i + 1] === undefined) strArr[i] = strArr[i] + "_";
//     else {
//       strArr[i] = strArr[i] + strArr[i + 1];
//       strArr.splice(i + 1, 1);
//     }
//   }
//   return strArr;
// }

// console.log(solution("abc"));
// console.log(solution("abcdef"));

// let arr2 = [0, 1, 2, 3];
// console.log(arr2[4] === undefined);

////////////////////////////////////////
// ------------  MAY 23rd   ------------
// function rgb(r, g, b) {
//   // complete this function
//   let hex = "";
//   let arr = [r, g, b];
//   arr.map((el) => {
//     el > 255 ? (el = 255) : el < 0 ? (el = 0) : el;
//     el = el.toString(16);
//     console.log(el.length);
//     el = el.length == 1 ? el + "0" : el;
//     console.log(el + "0");
//     hex += el;
//   });
//   hex = hex.toUpperCase();
//   return hex;
// }

// console.log(rgb(255, 255, 255));
// console.log(rgb(255, 255, 300));
// console.log(rgb(0, 0, 0));
// console.log(rgb(148, 0, 211));
////////////////////////////////////////
// ------------  MAY 22nd   ------------
// function duplicateEncode(word) {
//   // ...
//   word = word.toLowerCase();
//   wordArr = word.split("");
//   resultArr = word.toLowerCase().split("");
//   // console.log(word[0], wordArr[0]);
//   for (let i = 0; i < wordArr.length; i++) {
//     wordArr[i] = undefined;
//     if (wordArr.includes(word[i])) {
//       wordArr[i] = word[i];
//       resultArr[i] = ")";
//     } else {
//       wordArr[i] = word[i];
//       resultArr[i] = "(";
//     }
//   }
//   return resultArr.join("");
// }
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log("G)m)))O))T)))))b(xJ");
// console.log(duplicateEncode("G)m)))O))T)))))b(xJ"));
// console.log("()()))())()))))((((");

////////////////////////////////////////
// ------------  MAY 21st   ------------

// function isPrime(num) {
//   //TODO
//   lastDigit = num % 10;
//   if (num === 2 || num === 3 || num === 5 || num === 7) return true;
//   return (
//     num > 1 &&
//     lastDigit !== 0 &&
//     lastDigit !== 2 &&
//     lastDigit !== 4 &&
//     lastDigit !== 6 &&
//     lastDigit !== 8 &&
//     `${num}`.split("").reduce(function (total, num) {
//       console.log(+total);
//       return total + num;
//     }) %
//       3 !==
//       0
//   );
// }

// console.log(isPrime(5));
// console.log(isPrime(-5));
// console.log(isPrime(1));
// console.log(isPrime(49));
// console.log(isPrime(13));
// console.log(
//   isPrime(403489967),
//   403489967 % 3,
//   `403489967`.split("").reduce(function (total, num) {
//     console.log(+total);
//     return total + num;
//   }) % 3
// );

// Stumped - had to look answer up - The key was to loop up to the square root of each number
// const isPrime2 = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// };

// console.log(isPrime2(5));
// console.log(isPrime2(-5));
// console.log(isPrime2(1));
// console.log(isPrime2(49));
// console.log(isPrime2(13));
// console.log(isPrime2(403489967));

////////////////////////////////////////
// ------------  MAY 19TH   ------------
// function XO(str) {
//   //code here
//   str = str.toLowerCase();
//   let arr = Array.from(str).filter((el) => el == "o" || el == "x");
//   let o = 0;
//   let x = 0;

//   console.log(arr);
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == "x") {
//       x += 1;
//     } else if (arr[i] == "o") {
//       o += 1;
//     }
//   }
//   if (x === o) return true;

//   return false;
// }

// console.log(XO("ooXx"));
// console.log(XO("zpzpzpp"));

////////////////////////////////////////
// ------------  MAY 18TH   ------------
// function spinWords(string) {
//   //TODO Have fun :)
//   return string
//     .split(" ")
//     .map((el) => (el.length >= 5 ? el.split("").reverse().join("") : el))
//     .join(" ");
// }

// console.log(spinWords("Hey fellow warriors"));

////////////////////////////////////////
// ------------  MAY 17TH   ------------
// function arrayDiff(a, b) {
//   return a.filter((el) => !b.find((el2) => el === el2));
// }

// console.log(arrayDiff([1, 2, 3, 4], [1, 2]));

// let a = [1, 2, 3, 4, 5];
// let b = [];

// c = a.filter((el) => !b.find((el2) => el === el2));
// console.log(c);

////////////////////////////////////////
// ------------  MAY 16TH   ------------
// let x = 150;
// x = `${x}`;
// console.log(+x[0]);

// x = 89;
// p = 6;
// x = `${x}`;
// let total = 0;
// console.log(x.length);
// for (let i = 0; i < x.length; i++) {
//   let digit = +x[i];
//   console.log(`The digit is ${digit}`);
//   digit = digit ** p;
//   console.log(digit);
//   p++;
//   total += digit;
// }
// let k = -1;
// if (total % +x === 0) {
//   k = total / +x;
// }
// console.log(k);
// console.log(total);
// console.log(total / +x);
// function digPow(n, p) {
//   // ...
//   n = `${n}`;
//   let total = 0;
//   for (let i = 0; i < n.length; i++) {
//     let digit = +n[i];
//     digit = digit ** p;
//     p++;
//     total += digit;
//   }
//   let k = -1;
//   if (total % +n === 0) {
//     k = total / +n;
//   }
//   return k;
// }

// console.log(digPow(81, 1));
// console.log(digPow(92, 1));
// console.log(digPow(46288, 3));
// //  Best practice
// function digPow2(n, p) {
//   var x = String(n)
//     .split("")
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }

// ------------  MAY 15TH   ------------

// let x = [];

// let a = "1 3 4 5 2 6 7 8 43";

// a = a
//   .split(" ")
//   .map((el) => +el)
//   .sort((a, b) => a - b);
// console.log(`${a.shift()}`);
// console.log(a.pop());

// console.log(a);

// let z = undefined;
// if (z) {
//   console.log("did not work");
// } else {
//   console.log("worked");
// }

// z = "1";
// k = z.concat(" ", z);
// console.log(k);

// function highAndLow(numbers) {
//   // ...
//   numbers = numbers
//     .split(" ")
//     .map((el) => +el)
//     .sort((first, second) => first - second);
//   const smallest = `${numbers.shift()}`;
//   const largest = `${numbers.pop()}`;
//   // const largest = undefined;
//   let result = "";
//   if (largest == "undefined") {
//     result = `${smallest} ${smallest}`;
//   } else {
//     result = largest.concat(" ", smallest);
//   }
//   return result;
// }

// console.log(highAndLow("42"));
