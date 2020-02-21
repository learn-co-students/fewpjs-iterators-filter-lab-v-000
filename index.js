// Code your solution here

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const findMatching = (arr, query) => {
  return arr.filter(function(el) {
    return el.capitalize().indexOf(query.capitalize()) !== -1
  })
}


const fuzzyMatch = (drivers, firstLetters) => {
  let nameLength = firstLetters.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === firstLetters;
  });
}

const matchName = (array, name) => {
  return array.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}





