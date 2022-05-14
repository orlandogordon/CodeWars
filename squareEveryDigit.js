// My first solution

function squareDigits(num) {
  let squaredNum = 0;
  let newNum = "";
  for (let i = 0; i < num.toString().length; i++) {
    squaredNum = +num.toString()[i];
    squaredNum = squaredNum * squaredNum;
    newNum = newNum.concat("", `${squaredNum}`);
  }
  return +newNum;
}

// Best Solution
/*

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

*/
