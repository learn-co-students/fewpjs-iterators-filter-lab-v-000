function findMatching(drivers,name) {
    return drivers.filter(dn => {
        return dn.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers,name) {
    return drivers.filter(dn => {
        return dn.slice(0,2).toLowerCase() === name.slice(0,2).toLowerCase();
    })
}

function matchName(drivers,name) {
    return drivers.filter(dn => {
        return dn.name === name;
    })
}