// Code your solution here
function findMatching(drivers, string) {
  let matches = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  })
  return matches
}

function fuzzyMatch(drivers, string) {
  let matches = drivers.filter(driver => {
    return driver.charAt(0) === string.charAt(0)
  })
  return matches

}

function matchName(drivers, string) {
  let matches = drivers.filter(driver => {
    return driver.name === string
  })
  return matches
}