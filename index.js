// Code your solution here

function findMatching(drivers, driverName) {
  return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase()) 
}

function fuzzyMatch(driverList, firstLetters) {
  return driverList.filter(function (driver) {
    return driver.slice(0, firstLetters.length) === firstLetters
  })
}

function matchName(driverList, name) {
  return driverList.filter(function (driver) {
    return driver.name === name
  })
}
