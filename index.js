// Code your solution here


// function findMatching(array, string){
//   if (array.find(item => item.toLowerCase() === string.toLowerCase)) {
//     return array.find(item => item.toLowerCase() === string.toLowerCase)
//   } else {
//     return []
//   }
//
// }

// let array = ["Tom", "tom", 3, "Tom"]
// let string = "Tom"

// expected:
// the function should be case insensitive.
//
// issue:
// it returns the right name, but not the right case. for example the test expects
// "Bobby", it returns "bobby".

// try
// -could measure the length of the given string, then slice that from the drivername
// and see if they are equal.


// function fuzzyMatch(driversArray, string1){
//   let match = driversArray.filter(driver =>
//       if ((driver.slice(0, string1.length) === string1)) {
//         return driver
//       })
// }

// function fuzzyMatch(driversArray, string1){
//   return driversArray.filter(driver => {
//       if (driver.slice(0, string1.length) === string1) {
//         return driver
//       }
//   })
//   // return match
// }


// function fuzzyMatch(driversArray, string1){
//   return driversArray.filter(driver => {
//       driver.slice(0, string1.length) === string1
//   })
//   // return match
// }

// v1 matteo
// notice the necessity of both returns. since it's multiline syntax, you return
// the block and the return the whole product of driversArray.filter
// function fuzzyMatch(driversArray, string1){
//   return driversArray.filter(driver => {
//       return driver.slice(0, string1.length) === string1
//   })
//   // match is already returned by filter
// }


function fuzzyMatch(driversArray, string1){
  return driversArray.filter(driver => driver.slice(0, string1.length) === string1)
  // #implicit inline return
}



function findMatching(array, string){
  let found = array.filter(driver => driver.toLowerCase() === string.toLowerCase())
  if (found) {
    return found.map( driver => driver.charAt(0) + driver.slice(1) )
  } else {
    return []
  }

}



function matchName(array, string){
  return array.filter( driver => driver.name === string)
}
