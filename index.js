function findMatching(arr, str) {
  return arr.filter(function (driver) {
    return driver.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str) {
  return arr.filter(driver => driver.slice(0, str.length) === str)
}

function matchName(arr, str) {
  return arr.filter(driver => driver['name'] === str);
}

