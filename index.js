// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
}

function fuzzyMatch(drivers, chars) {
    return drivers.filter(driver => driver.slice(0,chars.length) === chars)
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}