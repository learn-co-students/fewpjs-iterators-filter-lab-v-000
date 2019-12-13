// Code your solution here
function findMatching(drivers, search) {
  return drivers.filter(name => name.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(drivers, search) {
  return drivers.filter(name => name.substring(0, search.length) === search)
}

function matchName(drivers, search) {
  return drivers.filter(driver => driver.name === search)
}
