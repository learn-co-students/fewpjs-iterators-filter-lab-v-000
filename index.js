function findMatching(arr, s) {
    return arr.filter(d => {
        return d == s || d == s.toLowerCase()
    })
}

function fuzzyMatch(arr, s) {
    return arr.filter(d => {
        return d.charAt(0) == s.charAt(0)})
}

function matchName(arr, s) {
    return arr.filter(d => {
        return d.name == s})
}