// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter((driver) => RegExp(query, "i").test(driver) )
}

function fuzzyMatch(drivers, query) {
  return drivers.filter((driver) => RegExp(`^${query}`, "i").test(driver) )
}

function matchName(drivers, query) {
  return drivers.filter((driver) => driver.name === query)
}