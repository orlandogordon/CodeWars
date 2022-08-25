/* 

** INSTRUCTIONS **
Convert an array of names who have liked the object to a printable string to be displayed in UI. 

*/

function likes(names) {
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
}

console.log(likes([]) === "no one likes this");
console.log(likes(["Jacob", "Alex"]) === "Jacob and Alex like this");
console.log(
  likes(["Jacob", "Alex", "Mark", "Max"]) ===
    "Jacob, Alex and 2 others like this"
);
