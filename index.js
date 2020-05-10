// Code your solution here


function findMatching(drivers, name){
   return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, name){
    let string_length = name.length
    return drivers.filter(driver => driver.slice(0, string_length) === name)
}

function matchName(drivers, name_string){
    return drivers.filter(driver => driver.name === name_string)
    // same as (function (driver) {return driver.name.toLowerCase() === name.toLowerCase();
}