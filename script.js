////////////////////////////////////////
// ------------  MAY 21st   ------------

function isPrime(num) {
  //TODO
  lastDigit = num % 10;
  if (num === 2 || num === 3 || num === 5 || num === 7) return true;
  return (
    num > 1 &&
    lastDigit !== 0 &&
    lastDigit !== 2 &&
    lastDigit !== 4 &&
    lastDigit !== 6 &&
    lastDigit !== 8 &&
    `${num}`.split("").reduce(function (total, num) {
      console.log(+total);
      return total + num;
    }) %
      3 !==
      0
  );
}

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
