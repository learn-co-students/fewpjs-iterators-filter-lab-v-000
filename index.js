function findMatching(drivers, name) {
  const newDrivers = drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
  })
  return newDrivers
}


function fuzzyMatch(drivers, name) {
  const newDrivers = drivers.filter(n => {
    return n.startsWith(name)
  });
  return newDrivers;
}

function matchName(drivers, name) {
  const newDrivers = drivers.filter(n => {
    return n.name === name
  });
  return newDrivers
}
