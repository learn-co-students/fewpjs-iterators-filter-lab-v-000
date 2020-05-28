// Code your solution here
//  const findMatching = drivers.filter(driver => driver === driver.driver ) 
//  console.log(drivers, "drivers")
//  console.log(driver, "driver")

// TEMPLATE
// function findMatching(arr, query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
//   }

// Write findMatching - This function takes an array of drivers and a string as arguments, 
  function findMatching(drivers, driver) {
    // console.log(drivers, "drivers") 
    // [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby' ] drivers
    // console.log(driver, "driver")
    // Bobby driver
    // returns the matching list of drivers.
    return drivers.filter(function(name) {
        // console.log(name)
        // Bobby
        // Sammy
        // Sally
        // Annette
        // Sarah
        // bobby
        return name.toLowerCase().indexOf(driver.toLowerCase()) !== -1
    })
  }

// Write fuzzyMatch - This function takes an array of drivers and a string 
// as arguments for querying the array, 
  function fuzzyMatch(drivers, query) {
      console.log(drivers, "drivers")
    //   [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby' ] drivers
    //   console.log(query, "query")
    //   Sa query
    return drivers.filter(function(name) {
        console.log(name, "name")
        // Bobby name
        // Sammy name
        // Sally name
        // Annette name
        // Sarah name
        // bobby name
        // and returns all drivers whose names begin with the provided letters.
        return (name.startsWith(query)) 
    })
  }

