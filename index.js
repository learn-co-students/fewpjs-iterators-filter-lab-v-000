const findMatching = (drivers, string) => {
  return drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase()
  })
}

const fuzzyMatch = (drivers, string) => {
  let nameLength = string.length
  return drivers.filter(name => {
    return name.slice(0, nameLength) === string
  })
}

const matchName = (drivers, string) => {
  return drivers.filter(drivers => {
    return drivers.name.toLowerCase() === string.toLowerCase();
  })
}
