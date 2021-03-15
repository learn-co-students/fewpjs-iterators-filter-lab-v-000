// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(function(d) {
    return d.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(d) {
    return d.substring(0,1) === name.substring(0,1)
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(d) {
    return d.name === name
  })
}
