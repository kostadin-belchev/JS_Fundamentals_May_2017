function calculateSumAndVAT (params) {
    "use strict";
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        sum += Number(element);
    }
    let VAT = 0.2 * sum;
    let total = VAT + sum;
    console.log("sum = " + sum);
    console.log("VAT = " + VAT);
    console.log("total = " + total);
}