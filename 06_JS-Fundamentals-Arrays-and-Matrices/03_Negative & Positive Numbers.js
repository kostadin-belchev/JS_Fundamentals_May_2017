function negativeAndPositiveNums (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    //3 ways to pring it, be carful with tamplates
    // for (let i = 0; i < result.length; i++) {
    //     let element = result[i];
    //     console.log(element);
    // }
    console.log(result);
    //console.log(result.join("\n"));
}

console.log(negativeAndPositiveNums([7, -2, 8, 9]));
