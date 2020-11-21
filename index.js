// Code your solution here
function findMatching(drivers, name) {
	return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}//return matching list of drivers 

function fuzzyMatch(drivers, name) {
	return drivers.filter(driver => driver.substring(0, 2) === name)
}

function matchName(drivers, name) {
	return drivers.filter(driver => { 
		//console.log(driver["name"])
		return driver["name"] == name
		})
}