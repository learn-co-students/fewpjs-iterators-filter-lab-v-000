// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(d => d.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, letters){
    return drivers.filter(d => d.slice(0, letters.length) === letters);
};

function matchName(drivers, name){
    return drivers.filter(d => d.name === name);
};