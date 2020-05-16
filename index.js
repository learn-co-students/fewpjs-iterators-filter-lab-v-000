// Code your solution here
const findMatching = function(array_of_drivers, driver_name) {
  return array_of_drivers.filter(driver => { return driver.toUpperCase() === driver_name.toUpperCase(); })
}

const fuzzyMatch = function(array_of_drivers, driver_name) {
  return array_of_drivers.filter(driver => { return driver[0].toUpperCase() === driver_name[0].toUpperCase(); })
}

const matchName = function(array_of_drivers, driver_name) {
  return array_of_drivers.filter(driver => { return driver.name === driver_name; })
}