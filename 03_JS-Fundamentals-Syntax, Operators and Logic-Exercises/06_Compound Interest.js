function compoungInterest (arrOfNums) {
    let p = arrOfNums[0]; // principal
    let i = Number(arrOfNums[1]); // interest rate percentage
    let n = arrOfNums[2]; // compounding period in months
    let t = arrOfNums[3]; // total timespan, given in years
    i /= 100; // interest rate without percentage
    n = 12 / n; // compounding period in years
    let total = p * Math.pow((1 + (i/n)), n * t);
    return total.toFixed(2);
}

console.log(compoungInterest([1500, 4.3, 3, 6]));
//console.log(compoungInterest([100000, 5, 12, 25]));

