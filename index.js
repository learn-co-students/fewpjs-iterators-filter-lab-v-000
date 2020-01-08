// Code your solution here
function findMatching(arr, name) {
  return arr.filter(x => x.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(arr, name) {
  return arr.filter(x => x[0].toUpperCase() === name[0].toUpperCase());
}

function matchName(arr, name) {
  return arr.filter(x => x.name === name);
}