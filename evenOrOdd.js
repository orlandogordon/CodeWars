// My solution
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));
console.log(even_or_odd(5));
console.log(even_or_odd(34));

// Best Practice
function even_or_odd2(number) {
  return number % 2 ? "Odd" : "Even";
}
