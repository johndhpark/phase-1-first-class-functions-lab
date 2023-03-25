// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
	return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
	return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultipler(argument) {
	// body...
}

function createFareMultiplier(multiplier) {
	return (value) => {
		return value * multiplier;
	};
}

function fareDoubler(value) {
	return value * 2;
}

function fareTripler(value) {
	return value * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
	return func(arrayOfDrivers);
}
