'use strict';

function nextDay (currYear, currMonth, currDay) {
    let date = new Date(currYear, currMonth - 1, currDay);
    
    function addDays(date, daysToAdd) {
        let result = new Date(date);
        result.setDate(result.getDate() + daysToAdd);
        return result;
    }
    date = addDays(date, 1);
    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth();
    let nextDay = date.getDate();
    return `${nextYear}-${nextMonth + 1}-${nextDay}`;
}

console.log(nextDay(2016, 9, 30));