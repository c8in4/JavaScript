console.clear();

function isAnagram(firstWord, secondWord) {}

let firstWord = "Linh";
let secondWord = "Linh";

if (
  JSON.stringify(Array.from(firstWord).sort()) ===
  JSON.stringify(Array.from(secondWord).sort())
) {
  console.log("true");
} else {
  console.log("false");
}
