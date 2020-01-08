function findMatching(arr, str) {
  let drivers = arr.filter(driver => driver.toLowerCase() === str.toLowerCase());
  return drivers
}

function fuzzyMatch(arr, str) {
  let drivers = arr.filter(driver => {
    return driver.slice(0, str.length) == str
  });
  return drivers;
}

function matchName(arr, str) {
  let drivers = arr.filter(driver => driver.name === str);
  return drivers
}
