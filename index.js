// Code your solution here
//    findMatching()
function findMatching(drivers, args){
  return drivers.filter( f  =>  f.toLowerCase() === args.toLowerCase()

  )}


//otra forma
// function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }


function fuzzyMatch(drivers, args){
  let l = args.length
  return drivers.filter( f  =>  f.slice(0,l).toLowerCase() === args.toLowerCase()
  )}

  function matchName(drivers, args){
     return drivers.filter( f  =>  f.name.toLowerCase() === args.toLowerCase()  //with objects in drivers
   )
  }
