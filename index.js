// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    let namelength = name.length
    return drivers.filter(d => d.slice(0, namelength) === name)
}

function matchName(list, name) {
    return list.filter(function (driver){
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}