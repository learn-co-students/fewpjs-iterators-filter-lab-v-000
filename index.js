// This function takes an array of drivers and a string as arguments,
// and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

// This function takes an array of drivers and a string as arguments for querying the array,
// and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, str) {
    let stringLength = str.length;
    return drivers.filter((driver) => driver.slice(0, stringLength) === str);
}

// For the function below, each element of the drivers array is a JavaScript object that has a property of name.
// The function should return each element whose name property matches the provided string argument.
function matchName(drivers, str) {
    return drivers.filter((driver) => driver.name === str);
}