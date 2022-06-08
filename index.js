// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    const neww=drivers.slice(0,2).map(x=>x);
    return neww;
}
function returnLastTwoDrivers(drivers) {
    const last =drivers.slice(2).map(x=>x)
    return last;
}

function returnLastTwoDrivers(){

}
function createFareMultiplier(fare){
    return function(){return fare*fare};
}
const fareDoubler=fare=>fare*2;
const fareTripler=fare=>fare*3;
function selectDifferentDrivers(drivers, callFunc){
    let drive;
    if (callFunc===returnFirstTwoDrivers()){
        returnFirstTwoDrivers(drivers);
    }else if(callFunc===returnLastTwoDrivers()){
        returnLastTwoDrivers(drivers);
    }
}
