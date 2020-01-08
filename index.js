// Code your solution here

const findMatching = (arr, match) => {
    return arr.filter(n => n.toUpperCase() === match.toUpperCase())
}

const fuzzyMatch = (arr, match) => {
    return arr.filter(n => n.charAt(0).toUpperCase() === match.charAt(0).toUpperCase())
}

const matchName = (arr, match) => {
    return arr.filter(n => n.name === match)
}
