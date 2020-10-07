// Code your solution here
// function findMatching(drivers, driver){
//   return drivers.filter(function(driverName){
//     return driverName.toLowerCase() === driver.toLowerCase();
//   });
// }

//same as above
// ES6 notation with explicit return
// const findMatching = (drivers, driver) => {
//   return drivers.filter(driverName => {
//     return driverName.toLowerCase() === driver.toLowerCase();
//   });
// }

//same as above with one implicit return
// const findMatching = (drivers, driver) => {
//   return drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());
// }

//same as above full implicit return
const findMatching = (drivers, driver) =>
  drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());

// function fuzzyMatch(drivers, initials) {
//   return drivers.filter(function(driverName) {
//     return driverName.slice(0, 2) === initials
//   })
// }

const fuzzyMatch = (drivers, initials) =>
  drivers.filter(driverName => driverName.slice(0,2) === initials);

const matchName = (drivers, driverName) =>
  drivers.filter(driver => driver.name === driverName);
