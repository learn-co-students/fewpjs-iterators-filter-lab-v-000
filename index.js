function findMatching(array, string){
    const result = array.filter(name => name.toLowerCase() == string.toLowerCase());
    return result;
}

function fuzzyMatch(array, string){
    const result = array.filter(name => name.startsWith(string))
    return result;
}

function matchName(array, string){
    const result = array.filter(object => object.name == string)
    return result;
}
