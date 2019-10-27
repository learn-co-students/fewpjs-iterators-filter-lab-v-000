// Code your solution here

const findMatching = (driverArray, query) => {
	return driverArray.filter((el) => el.toLowerCase() === query.toLowerCase())
}

const fuzzyMatch = (driversArray, query) => {
	return driversArray.filter((el) => {
		let elArray = el.split('');
		let queryArray = query.split('');
		if (elArray[0] === queryArray[0]  && elArray[1] === queryArray[1]) {
			return true;
		}
	})
}

const matchName = (driversArray, query) => {
	return driversArray.filter((el) => {
		return el.name === query
	})
}
