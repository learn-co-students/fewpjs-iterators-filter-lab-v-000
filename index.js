// Code your solution here
//

function findMatching(drivers, name) {
  return drivers.filter((d) => d.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((d) => {
    return d.slice(0, name.length) === name;
  });
}

function matchName(drivers, name) {
  return drivers.filter((d) => d.name === name);
}
