// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(n => {
    return n.substring(0, string.length) === string;
  });
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name;
  });
}
