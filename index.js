// Code your solution here
function findMatching(driverNames, query) {
    return driverNames.filter(el => el.toLowerCase() === query.toLowerCase())
}

function fuzzyMatch(driverNames, queryPartial) {
    let nameLength = queryPartial.length;
    return driverNames.filter(el => el.slice(0, nameLength) === queryPartial)
}

function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }