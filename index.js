// Code your solution here

// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. 
// The function should be case insensitive.
function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => {
    let startLetters = driver.slice(0, letters.length)
    return startLetters.includes(letters)
  })
}

// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.
function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name === name
  })
}