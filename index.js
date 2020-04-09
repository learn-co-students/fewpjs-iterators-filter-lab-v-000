// Code your solution here
function findMatching(driversArr, name){
    return driversArr.filter(n => n.toLowerCase() === name.toLowerCase())
  };

function fuzzyMatch(driversArr, name){
  return driversArr.filter(n => n.charAt(0) === name.charAt(0))
}

function matchName(driversArr, name){
  return driversArr.filter(n => n.name === name)
}
