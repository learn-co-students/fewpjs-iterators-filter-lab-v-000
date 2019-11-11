// Code your solution here
function findMatching (drivers, find){
  return drivers.filter(driver => driver.toLowerCase() === find.toLowerCase())
}

function fuzzyMatch(drivers, find){
  return drivers.filter(driver => driver.slice(0, find.length) === find)
}

function matchName(drivers, name){
  return drivers.filter(driver => driver.name === name)
}
