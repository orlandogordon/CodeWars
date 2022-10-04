/* 

** INSTRUCTIONS **
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

function roundToNext5(n) {
  if (n % 5 === 0) return n;

  let add,
    subtract = n;
  while (true) {
    add += +1;
    subtract -= -1;
    if (add % 5 === 0) return add;
    if (subtract % 5 === 0) return subtract;
  }
}

console.log(roundToNext5(1) === 5);
console.log(roundToNext5(0) === 0);
console.log(roundToNext5(-1) === 0);
