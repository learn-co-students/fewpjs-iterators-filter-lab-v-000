// Code your solution here
function findMatching(drivers, name) {
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, nameLetter) {
    return drivers.filter(driver => driver.startsWith(nameLetter))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}