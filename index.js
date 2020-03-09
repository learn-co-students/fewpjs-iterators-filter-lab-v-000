
function findMatching(array, string) { 
    return array.filter(n => {
        return n.toUpperCase() == string.toUpperCase();
    })
}

function fuzzyMatch(array, letter) {
    return array.filter(i => i.startsWith(letter))
}

function matchName(array, n) {
    return array.filter(i => i.name == n)
}