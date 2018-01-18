function previousMonthsLastDay (array) {
    let date = new Date(array[2], array[1] - 1, array[0]); //remember that months start counting from 0 so you need to substract one to correct for this convention

    function addDays(date, daysToAdd) {
        let result = new Date(date);
        result.setDate(result.getDate() + daysToAdd);
        return result;
    }
    return addDays(date, - date.getDate()); //return the date minus a certain amount of days, to be precise, it returns the last day of the previous month
}

console.log(previousMonthsLastDay([17, 3, 2002]));
console.log(previousMonthsLastDay([13, 12, 2004]));

