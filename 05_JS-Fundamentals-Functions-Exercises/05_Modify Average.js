function modifyAverage (num) {
    let currSum = 0;
    while (currSum <= 5) {
        currSum = averageSum(num);
        // for (let i = 0; i < num.length; i++) {
        //     let element = num[i];
        //     currSum += Number(element);
        // }
        if (currSum <= 5) {
            num += '9';
        }
    }
    return num;

    function averageSum (num) {
        num = num.toString();
        currSum = 0;
        for (let i = 0; i < num.length; i++) {
            let element = num[i];
            currSum += Number(element);
        }
        return currSum / num.length;
    }
}

console.log(modifyAverage(101));
console.log(modifyAverage(5835));

