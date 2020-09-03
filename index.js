// Code your solution here
function findMatching(array, name){
  return array.filter(s => (s.charAt(0).toUpperCase() + s.slice(1) || s.charAt(0).toLowerCase() + s.slice(1)) == name)
}
function fuzzyMatch(array, string){
  return array.filter(s => s.indexOf(string) == 0)
}
function matchName(array, name) {
  return array.filter(s => s.name === name)
}
