const findMatching = function(arr, str){
  return arr.filter(el => el.toLowerCase().indexOf(str.toLowerCase()) !== -1);
}

const fuzzyMatch = function(drivers, str){
  let newArray = [];
  newArray = drivers.filter(driver => driver.startsWith(str));
  return newArray;
  }

const matchName = function(drivers, str){

  let obj = (drivers.filter(driver => driver.name === str));
  return obj;

}
