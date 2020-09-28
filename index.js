// Code your solution here
function fuzzyMatch(array, name){
    let x = array.filter( x => x[0] === name[0])
    return x
}

function matchName(array, name){
    let x = array.filter( x => x.name.toLowerCase() === name.toLowerCase())
    return x
}

function findMatching(array, name){
    let x = array.filter( x => x.toLowerCase() === name.toLowerCase())
    return x
}