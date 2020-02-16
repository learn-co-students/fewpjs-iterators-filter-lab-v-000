const findMatching = (drivers, driverName) => {
  return drivers.filter(name => name.toLowerCase() === driverName.toLowerCase())
}

const fuzzyMatch = (drivers, firstLetters) => {
  return drivers.filter(name => name.toLowerCase().startsWith(firstLetters.toLowerCase()))
}

const matchName = (drivers, driverName) => {
  return drivers.filter(o =>
          Object.keys(o).some(k => o[k].toLowerCase().includes(driverName.toLowerCase())))
}
