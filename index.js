function findMatching(drivers, string) {
  return drivers.filter(matching => {
    return matching.toLowerCase() === string.toLowerCase();
  });
};

function fuzzyMatch(drivers, letters) {
  let letterLength = letters.length;
  return drivers.filter(matching => {
    return matching.slice(0, letterLength) === letters;
  });
};

function matchName(drivers, string) {
  return drivers.filter(matching => {
    return matching.name.toLowerCase() === string.toLowerCase();
  });
};
