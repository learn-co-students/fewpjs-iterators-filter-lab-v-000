// Code your solution here
function findMatching(list, name) {
    return list.filter((driverName) => {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, name) {
    
    let x =  name.length 
    return list.filter((driverLetters) => {
        return driverLetters.slice(0, x) === name;
    });
    
}

function matchName(name) {
    let y = name.length
    return list.filter((driverName) => {
        return driverName === name;
  });
    
}