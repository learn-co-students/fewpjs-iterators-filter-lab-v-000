// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    let letters = string.length;
    return drivers.filter((driver) => driver.slice(0, letters) === string);
}

function matchName(drivers, string) {
    return drivers.filter(x => x.name === string);
}