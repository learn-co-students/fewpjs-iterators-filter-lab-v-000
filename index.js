// Code your solution here

// Write findMatching- This function takes an array of drivers and a string as
// arguments, and returns the matching list of drivers. The function should be
// case insensitive.
function findMatching(drivers, string) {
  const newDrivers = drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase();
  })
  return newDrivers
}

// Write fuzzyMatch - This function takes an array of drivers and a string as
// arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.
function fuzzyMatch(drivers, string) {
  const newDrivers = drivers.filter(name => {
    return name.startsWith(string)
  });
  return newDrivers;
}

// Write matchName - This function takes an array of drivers and a string as
// arguments. In this function, each element of the drivers array is a JavaScript
// object that has a property of name. The function should return each element
// whose name property matches the provided string argument.
function matchName(drivers, string) {
  const newDrivers = drivers.filter(name => {
    return name.name === string
  });
  return newDrivers
}
