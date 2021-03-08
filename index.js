// Code your solution here
function findMatching (array, string) {
    return array.filter( n=> {
        return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }
  
  function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }