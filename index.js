// Code your solution here

function findMatching(driversArray, nameString) {
    return driversArray.filter(d => {
        return d.toLowerCase() === nameString.toLowerCase();
    })
}

function fuzzyMatch(driversArray, nameString) {
    return driversArray.filter(d => {
        let letterLength = nameString.length;
        return d.slice(0, letterLength) === nameString;
    })
}

function matchName(driversArray, nameString) {
    return driversArray.filter(d => {
        return d.name === nameString;
    })
}