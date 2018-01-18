function aggregateElements (arrayOfNums) {
    console.log(sum(arrayOfNums));
    console.log(sumInverseValues(arrayOfNums));
    console.log(concat(arrayOfNums));
    

    function concat (arrayOfNums) {
        let result = '';
        arrayOfNums.forEach(element => {
            result += element;
        });
        return result;
        // for (let i = 0; i < arrayOfNums.length; i++) {
        //     let element = arrayOfNums[i];
        //     result += element;
        // }
        // return result;
    }
    function sumInverseValues (arrayOfNums) {
        let sum = 0;
        for (let i = 0; i < arrayOfNums.length; i++) {
            let element = (1/arrayOfNums[i]);
            sum += element;
        }
        return sum;
    }
    function sum (arrayOfNums) {
        let sum = 0;
        for (let i = 0; i < arrayOfNums.length; i++) {
            let element = arrayOfNums[i];
            sum += element;
        }
        return sum;
    }
}

//aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);