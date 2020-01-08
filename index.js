// Code your solution here

function findMatching(array, string) {
    return array.filter(name => { return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(array, string) {
    return array.filter(name => {return name.split('')[0] === string.split('')[0]})
}

function matchName(array, string) {
    return array.filter( name => {return name.name === string})
}