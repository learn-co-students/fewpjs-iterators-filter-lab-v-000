function findMatching(arr, str){
  return arr.filter( i => i.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){
  return arr.filter( i => i.substring(0,1).toLowerCase() === str.substring(0,1).toLowerCase())
}

function matchName(objects, str){
  return objects.filter( obj => obj.name == str )
}