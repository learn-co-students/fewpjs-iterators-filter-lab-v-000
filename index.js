

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching = (list, name) => {
	return list.filter(el =>  {

		el.toLowerCase().indexOf(name.toLowerCase()) !== -1; {
			//this checks that el has some characters. 
			return el.toLowerCase() === name.toLowerCase() 
		}
	})
}
	
// findMatching(drivers, 'bob')

const fuzzyMatch = (list, string) => {
	let lengthOfString = string.length;
	return list.filter(el => {
		return el.slice(0, lengthOfString ) === string
	})
}

// fuzzyMatch(drivers, 'Sa')


const matchName = (list, name) => {
	return list.filter(driver => {
		return driver.name.toLowerCase() === name.toLowerCase()
		})
}