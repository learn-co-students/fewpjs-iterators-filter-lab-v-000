// Code your solution here
function findMatching(arr, str){
    return arr.filter(n => {
        return n.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(arr, str){
    let strLength = str.length;
    return arr.filter(n => {
        return n.slice(0, strLength) === str;
    });
}

function matchName(arr, str){
    return arr.filter(n => {
       return n.name.toLowerCase() === str.toLowerCase();
    });
}