function findMatching(drivers,string){
let result = drivers.filter(word => word.toUpperCase() === string.toUpperCase())
return result
}

function fuzzyMatch(drivers,string){
  let result = drivers.filter(word => word == string)
return result

}


function matchName(drivers,string){
  let result = drivers.filter(word => word.name === string)
  return result

}
