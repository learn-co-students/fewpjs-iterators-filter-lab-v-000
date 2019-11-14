// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        let index = string.length;
        let compDriver = driver.split("");
        compDriver = compDriver.splice(0, index);
        compDriver = compDriver.join("");
        return compDriver === string;
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}