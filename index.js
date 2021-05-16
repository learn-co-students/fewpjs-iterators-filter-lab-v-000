// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, substring) {
    return drivers.filter(driver => driver.startsWith(substring));
};

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}