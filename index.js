function findMatching(listOfNames, query) {
    return listOfNames.filter(element => element.toLowerCase() === query.toLowerCase());
};

function fuzzyMatch(listOfNames, query) {
  return listOfNames.filter(element => element.slice(0, query.length) === query);
};

function matchName(listOfNames, query) {
    return listOfNames.filter(element => element.name.toLowerCase() === query.toLowerCase());
};
