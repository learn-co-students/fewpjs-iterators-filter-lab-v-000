// Code your solution here
function findMatching(sourceArray, query) {
  return sourceArray.filter(name =>
  name.toLowerCase() === query.toLowerCase())
}

function fuzzyMatch(sourceArray, query) {
  return sourceArray.filter(name => name.startsWith(query))
}

function matchName(sourceArray, query) {
  return sourceArray.filter(driver => driver.name === query)
}
