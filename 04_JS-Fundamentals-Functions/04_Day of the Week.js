function dayOfWeek (string) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (days.includes(string)) {
        return  days.indexOf(string) + 1;
    } 
    else {
        return 'error';
    }
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Sunday'));

