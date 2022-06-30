// My Solution
function generateHashtag(str) {
  let hashtag =
    "#" +
    str
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join("");

  if (hashtag.length > 140 || hashtag.length === 1) return false;
  return hashtag;
}

console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false
);

// Best Practice
function generateHashtag2(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
