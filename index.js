
const returnFirstTwoDrivers = function (namesArr){
 
  return namesArr.slice(0, 2);
};
const returnLastTwoDrivers = function (namesArr){
  return namesArr.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (int){
  return (fare) => int * fare;
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(namesArr, driversToReturn){
  return driversToReturn(namesArr);
};

