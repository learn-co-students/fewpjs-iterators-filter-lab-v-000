// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter( driver => driver.toUpperCase() == name.toUpperCase() )
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => {
        let partialLength = name.length
        return driver.slice(0,partialLength) === name
    })
}

const matchName = (drivers, name) => {
    return drivers.filter( driver => driver.name === name )
}