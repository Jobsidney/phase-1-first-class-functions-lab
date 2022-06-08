// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    const neww=drivers.slice(0,2).map(x=>x);
    return neww;
}
const returnLastTwoDrivers=function (drivers) {
    return drivers.slice(2);
}


function createFareMultiplier(fare){
    return function(){return fare*fare};
}
const fareDoubler=fare=>fare*2;
const fareTripler=fare=>fare*3;
const selectDifferentDrivers=function (drivers, callFunc){
     let drive=[];
    if (callFunc===returnFirstTwoDrivers()){
        return drive.unshift(returnFirstTwoDrivers(drivers));
    }else if(callFunc===returnLastTwoDrivers()){
        drive.push(returnLastTwoDrivers(drivers));
    }
    return drive;
}

