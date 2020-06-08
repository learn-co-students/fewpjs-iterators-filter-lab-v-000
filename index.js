// Code your solution here
//nmp test is faster <- REMEMBER THIS

function findMatching(drivers, name) {
  //console.log(drivers)
  //console.log(name)
  //console.log(drivers.filter(n => {return n === (name || name.toDownCase)}))
  let matchingName = drivers.filter(n => {
    return n === name || n === name.toLowerCase() || n === name.toUpperCase();
  }); //should return array of matching
  //only return works once, remember to make the methods with () <-- remember this! Kevin Webster
  return matchingName;
}

function fuzzyMatch(drivers,name) {
 console.log(drivers)
 console.log(name)
 let matchingName = drivers.filter(n => {
     return n[...1] === name[...1] //using the spread operator      
 })
}