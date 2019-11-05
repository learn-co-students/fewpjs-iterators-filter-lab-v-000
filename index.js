// Code your solution here
function findMatching(arr, item) {
  return arr.filter((i) => i.toLowerCase() === item.toLowerCase())
}

function fuzzyMatch(arr, item) {
  return arr.filter((i) => i.startsWith(item))
}

function matchName(arr, item) {
  return arr.filter((i) => i.name === item)
}
