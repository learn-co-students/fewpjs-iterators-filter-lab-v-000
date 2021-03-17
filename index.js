function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    let strLength = str.length;
    return drivers.filter(driver => driver.slice(0, strLength) === str);
}

function matchName(driversObj, str) {
    return driversObj.filter(driver => driver.name === str)
}