// Code your solution here
function findMatching(drivers, driverName) {
  return drivers.filter( driver => driver.toLowerCase() === driverName.toLowerCase() );
}

function fuzzyMatch(drivers, startingLetters) {
  return drivers.filter( driver => driver.startsWith(startingLetters) );
}

function matchName(drivers, driverName) {
  return drivers.filter( driver => driver.name === driverName );
}