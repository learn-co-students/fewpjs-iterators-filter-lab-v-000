// Code your solution here
function findMatching(drivers,name) {
  return drivers.filter(driver => driver.toUpperCase() == name.toUpperCase())
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.substring(0,1).toUpperCase() == name.substring(0,1).toUpperCase())
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name == name)
}
