function findMatching(array, query) {
    return array.filter(element => element.toUpperCase() === query.toUpperCase());
};

function fuzzyMatch(array, query) {
  return array.filter(element => element.slice(0, query.length) === query);
};

function matchName(array, query) {
    return array.filter(element => element.name.toUpperCase() === query.toUpperCase());
};
