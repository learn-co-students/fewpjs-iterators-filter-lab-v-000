function findMatching(drivers, string) {
	const result = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
	return result;
}
 
function fuzzyMatch(drivers, partialString) {
	const length = partialString.length 
	const result = drivers.filter(driver => driver.slice(0, length) === partialString);
	return result;
}

function matchName(drivers, string) {
	const result = drivers.filter(driver => driver.name === string);
	return result;
}