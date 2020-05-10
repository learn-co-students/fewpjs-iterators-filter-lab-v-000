// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let match = drivers.filter(n => {
    return n.toLowerCase() == name.toLowerCase()
  })
  return match
}

function fuzzyMatch(drivers, name) {
  let match = drivers.filter(n => {
    return n.toLowerCase().charAt(0) == name.toLowerCase().charAt(0)
  })
  return match
}

function matchName(drivers, name) {
  let match = drivers.filter(n => {
    return n.name === name
  })
  return match
}


let even = arr.filter(n => {
  return n % 2 === 0;
});
