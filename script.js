////////////////////////////////////////
// ------------  June 10th   ------------
function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));
////////////////////////////////////////
// ------------  June 9th   ------------
const reverseSeq = (n) => {
  let arr = [];
  while (n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};

console.log(reverseSeq(5));
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
