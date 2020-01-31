function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().charAt(0) === string.toLowerCase().charAt(0);
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

// function filterItems(arr, query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
//   }