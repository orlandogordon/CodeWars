// My Solution & Best Practice
function removeEveryOther(arr) {
  //your code here
  return arr.filter((el, index, arr) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));
