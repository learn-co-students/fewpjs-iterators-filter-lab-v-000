// Code your solution here
//npm test is faster <- REMEMBER THIS

function findMatching(drivers, name) {
  //console.log(drivers)
  //console.log(name)
  //console.log(drivers.filter(n => {return n === (name || name.toDownCase)}))
  let matchingName = drivers.filter((n) => {
    return n === name || n === name.toLowerCase() || n === name.toUpperCase();
  }); //should return array of matching
  //only return works once, remember to make the methods with () <-- remember this! Kevin Webster
  return matchingName;
}

function fuzzyMatch(drivers, namePartial) {
  console.log(drivers);
  console.log(namePartial); //changed name to namePartial because its partial

  let nameLength = namePartial.length; //.length worked instead of .length()
  console.log(nameLength);
  let matchingName = drivers.filter(driver => {
    let driverPartial = driver.slice(0, nameLength);
    return driverPartial === namePartial; //Dwayne
  });
  return matchingName
}

function matchName(drivers, name) {
    //console.log(drivers)
    //console.log(name)
    let matchingName = drivers.filter(driver => {
        let driverName = driver.name;
        return driverName === name
    })
    return matchingName
}