// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari','Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(){
        return (fare * 5)
    }
}

const fareDoubler = function(number){
    return (number * 2)
}
const fareTripler = function (number){
    return (number * 3)
}
const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayofDrivers);
}