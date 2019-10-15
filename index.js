const findMatching = function(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

const fuzzyMatch = function(drivers, string) {
  let nameLength = string.length;
  return drivers.filter(function(driver) {
    return driver.slice(0, nameLength) === string
  });
}

const matchName = function(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase()
  });
}
