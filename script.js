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
