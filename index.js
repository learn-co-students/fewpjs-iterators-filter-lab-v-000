function findMatching(x, name) {
    //drivers is an arrat giving to use.
    const matchFound = x.filter(xt => {
         return xt.toLowerCase() === name.toLowerCase();
        // console.log (xt === name)
    })
    return matchFound
}


function fuzzyMatch(x, letter) {
    let checkDriver = x.filter(xt =>{return xt.toUpperCase().slice(0,letter.length) === letter.toUpperCase()})
    return checkDriver
}
    
       

function matchName(array, name) {
    
}