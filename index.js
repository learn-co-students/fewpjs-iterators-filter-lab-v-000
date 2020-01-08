// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

  // for(let i = 0; drivers.length; i++)
  function findMatching(drivers, name) {
  return drivers.filter(function(drivername) {
    return drivername.toUpperCase() == name.toUpperCase();

})
  };

function fuzzyMatch(drivers, name){
  return drivers.filter(function(drivername){
    return drivername.charAt(0).slice(0) == name.charAt(0).slice(0)
  });
}
function matchName(drivers, name) {
  return drivers.filter(function(drivername) {
  return drivername.name.toLowerCase() === name.toLowerCase();
});
}

