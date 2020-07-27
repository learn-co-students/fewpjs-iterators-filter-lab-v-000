function findMatching(drivers, string) {
    let d = drivers.filter(name => name.toLowerCase() === string.toLowerCase());
     return d
 }

function fuzzyMatch(drivers, string) {
    let d = drivers.filter(name => name.startsWith(string))
    return d
}

function matchName(drivers, string) {
    let d = drivers.filter(o => o.name === string)
    return d
}