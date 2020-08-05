// Code your solution here
function findMatching (driver, string) {
    return driver.filter( function(d) {
        return d.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(driver, string) {
    let nameLength = string.length
    return driver.filter( function(d) {
        return d.slice(0, nameLength) === string
    })
}

function matchName(driver, string) {
    return driver.filter (function(d) {
        return d.name === string
    })
}