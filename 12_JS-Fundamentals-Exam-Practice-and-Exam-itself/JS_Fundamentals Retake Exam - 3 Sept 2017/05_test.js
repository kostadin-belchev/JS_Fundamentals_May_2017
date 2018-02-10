function repeatSignNTimes (sign = '', times) {
    let string = '';
    for (let i = 0; i < times; i++) {
        string += sign;
    }
    return string;
}

console.log(repeatSignNTimes('*', 5));