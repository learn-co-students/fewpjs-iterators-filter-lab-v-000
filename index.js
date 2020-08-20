// Code your solution here
let findMatching = (drivers, name) => {
    let match = drivers.filter(driver =>{
        return driver.toUpperCase() === name.toUpperCase() 
    })
    return match
}

let fuzzyMatch = (drivers, name) =>{
    let match = drivers.filter(driver =>{
        return driver.startsWith(name) 
    })
    return match
}

let matchName = (drivers, name) =>{
    let match = drivers.filter(driver =>{
        return driver.name === name 
    })
    return match
}