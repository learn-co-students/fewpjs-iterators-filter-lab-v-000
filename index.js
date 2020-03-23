// Code your solution here

function findMatching(arr, name){
    return arr.filter(e => e.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(arr, name){
    return arr.filter(e => e.slice(0, 2) === name);
}

function matchName(arr, name){
    return    arr.filter(e => e.name === name);
}

