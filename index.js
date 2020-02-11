// Code your solution here

function findMatching(drivers, name){
    let matching = drivers.filter(d =>{
        return d.toLowerCase() === name.toLowerCase();
    });
    return matching;
}

function fuzzyMatch(drivers, name){
    let matching = drivers.filter(d =>{
        return d.charAt(0).toLowerCase() === name.charAt(0).toLowerCase();
    });
    return matching; 
}

function matchName(drivers, nameSample){
    let matching = drivers.filter(d =>{
        return d.name.toLowerCase() === nameSample.toLowerCase();
    });
    return matching;
}