// Code your solution here
function findMatching(arr, name) {
    return arr.filter(e => {
        return e === name;
    });
}

function fuzzyMatch(arr, name) {
    return arr.filter(e => {
        return e[1] === name;
    });
}

// function matchName(arr, name) {
//     return arr.filter(function (e) {
//         return e.name === name;
//     });
// }

function matchName(arr, name) {
    return arr.filter(e => e.name === name);
}