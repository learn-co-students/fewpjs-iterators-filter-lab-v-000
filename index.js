// Code your solution here
function findMatching(drivers, str){
    return drivers.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase()
    })
}

function fuzzyMatch(drivers, str){
    return drivers.filter(driver => {
        return driver.startsWith(str)
    })
}

function matchName(drivers, str){
    return drivers.filter(driver => {
        return driver.name === str
    })
}