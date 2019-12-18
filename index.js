function findMatching(drivers, name){
    return drivers.filter(dName => {
        return dName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(dName => {
        return dName.startsWith(letters)
    })
}

function matchName(drivers, name){
    return drivers.filter(dName =>{
        return dName.name.toLowerCase() === name.toLowerCase()
    })
}