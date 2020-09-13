function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => {
    let startLetters = driver.slice(0, letters.length)
    return startLetters.includes(letters)
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name
  })
}