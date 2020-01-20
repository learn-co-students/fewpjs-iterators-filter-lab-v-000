function findMatching(drivers, name){
  return drivers.filter(n =>{
    return n.toUpperCase() === name.toUpperCase()
  });
}

function fuzzyMatch(drivers, el){
    return drivers.filter(n => {
        if (n.startsWith(el)){
          return n
      };
    });
}


function matchName(drivers, name){
    return drivers.filter(n => {
        if  (n.name === name){
            return n
    };
  });
}
