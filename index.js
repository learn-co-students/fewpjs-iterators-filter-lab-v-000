// Code your solution here
function findMatching(arr, driver) {
  return arr.filter(d => d.toLowerCase() == driver.toLowerCase())
}

function fuzzyMatch(arr, letters) {
  return arr.filter(d => d.slice(0, letters.length) == letters)
}

function matchName(arr, driver) {
  return arr.filter(d => d.name == driver)
}
