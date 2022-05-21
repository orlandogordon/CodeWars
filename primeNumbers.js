// My attmept

const isPrime2 = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

console.log(isPrime2(5));
console.log(isPrime2(-5));
console.log(isPrime2(1));
console.log(isPrime2(49));
console.log(isPrime2(13));
console.log(isPrime2(403489967));

// Best practice
function isPrime2(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
