function roundingPrecision (arr) {
    let num = arr[0];
    let precision = arr[1];
    if (precision > 15)
        precision = 15;
    return Number(num.toFixed(precision));
}

console.log(roundingPrecision([3.1415926535897932384626433832795, 2]));
console.log(roundingPrecision([10.5, 3]));
