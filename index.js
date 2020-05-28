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

  function findMatching(drivers, driver) {
    // console.log(drivers, "drivers") 
    // [ 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby' ] drivers
    // console.log(driver, "driver")
    // Bobby driver
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