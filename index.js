// Code your solution here

function findMatching(drivers, name){
  return drivers.filter(d => {return d.toUpperCase() === name.toUpperCase()})
}


function fuzzyMatch(drivers, str){
  return drivers.filter(function(d){
    let darr = d.slice(0, str.length)
    return darr === str
  })
}

function matchName(drivers, name){
  return drivers.filter(d => {return d.name.toUpperCase() === name.toUpperCase()})
}
