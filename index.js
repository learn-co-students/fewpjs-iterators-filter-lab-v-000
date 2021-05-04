// Code your solution here

function upCaseAll(word){
  return word.split(' ').map(chars => chars.split(' ').map(char => char.toUpperCase()).join(' ')).join(' ');
}
function findMatching(arr, s) {
  // return arr.filter(e => upCaseAll(e) === upCaseAll(s));
  return arr.filter(e => e.toUpperCase() === s.toUpperCase());
}
function fuzzyMatch(arr, s){
  return arr.filter(e => e.charAt(0) === s.charAt(0));
}
const matchName = (arr, s) => arr.filter(e => e["name"] === s);
