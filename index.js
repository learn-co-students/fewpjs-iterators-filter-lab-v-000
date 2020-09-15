// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
};

// function findMatching(list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }


function fuzzyMatch(drivers, partialName) {
  let lengthOfName = partialName.length
  return drivers.filter(driverName => driverName.slice(0, lengthOfName) === partialName)
}

// function fuzzyMatch(list, partialName) {
//   let lengthOfName = partialName.length
//   return list.filter(function (driverName) {
//     return driverName.slice(0, lengthOfName) === partialName
//   });
// }

function matchName(drivers, string) {
  return drivers.filter(driverName => driverName.name.toLowerCase() === string.toLowerCase())
}

// function matchName(list, name) {
//   return list.filter(function(driver) {
//     return driver.name.toLowerCase() === name.toLowerCase();
//   });
// }
