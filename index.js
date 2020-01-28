// Code your solution here
function findMatching(arr, string){
  let result = arr.filter(word => {
    return word.localeCompare(string, undefined, { sensitivity: 'accent' }) === 0
    //or use regexp with match -> word.match(/ain/g)
  })
  return result
}


function fuzzyMatch(arr,letters){
  let result = arr.filter(item => {
  return item.startsWith(letters )? item : null
  })
  return result
}


function matchName(arr, name){
  const result = arr.filter(item => {
    return item.name === 'Bobby'
  })
  return result
}
