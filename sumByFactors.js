// My Solution
function sumOfDivided(lst) {
  // Confirm a list of ints were given
  if (lst.length < 1) return [];
  // Find the integer with greatest abs value
  const maxInt = lst
    .map((el) => {
      if (el < 0) return el * -1;
      else return el;
    })
    .reduce((prev, curr) => (prev < curr ? curr : prev));

  // Find all prime numbers between 0 and the int with largest absolute value
  let sieve = [],
    primes = [];

  for (let i = 2; i <= maxInt; i++) {
    if (!sieve[i]) {
      primes.push(i);
      // << operator = i(left opperand) * (2 ** 1(right opperand))
      // This loop eliminates any multiples of i
      for (let j = i << 1; j <= maxInt; j += i) {
        sieve[j] = true;
      }
    }
  }

  // Find which prime numbers are factor(s) of the ints given and calculate sums / push to the answer array
  let sum = [];
  let answer = [];
  primes.forEach((primeNum) => {
    lst.forEach((int) => {
      if (int % primeNum === 0) sum.push(int);
    });
    if (sum.length > 0) {
      sum = sum.reduce((acc, curr) => curr + acc);
      answer.push([primeNum, sum]);
    }
    sum = [];
  });

  return answer;
}

console.log(sumOfDivided([12, 15]), [
  [2, 12],
  [3, 27],
  [5, 15],
]);

// Best Practice

function sumOfDivided2(lst) {
  if (lst.length == 0) {
    return [];
  }
  var m = Math.max.apply(null, lst.map(Math.abs)),
    primes = [],
    marked = Array(m + 1);

  for (var i = 2; i <= m; ++i) {
    if (marked[i]) continue;

    var sum = 0,
      isMul = false;
    lst.forEach(function (n) {
      if (n % i == 0) {
        sum += n;
        isMul = true;
      }
    });
    if (isMul) primes.push([i, sum]);

    for (var j = 2 * i; j <= m; j += i) {
      marked[j] = true;
    }
  }

  return primes;
}
