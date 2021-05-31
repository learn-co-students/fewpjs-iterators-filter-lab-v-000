// Code your solution here

function findMatching(drivers, matchingString) {
 let filteredDrivers;
 let upperCaseString = matchingString.toUpperCase();
 return filteredDrivers = drivers.filter(driver => driver.toUpperCase() == upperCaseString);
}

function fuzzyMatch(drivers, matchingString) {
  let filteredDrivers;
  let stringLength = matchingString.length;
  return filteredDrivers = drivers.filter(function (driver) {
    return driver.slice(0, stringLength) === matchingString;
  });
}

function matchName(drivers, matchingString) {
  let filteredDrivers;
  return filteredDrivers = drivers.filter(driver => driver.name === matchingString);
}