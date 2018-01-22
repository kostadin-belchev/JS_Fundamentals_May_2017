function cookingByNums (array) {
    //let [num, operation1, operation2, operation3, operation4, operation5] = [Number(params[0]), params[1], params[2], params[3], params[4], params[5]];
    //shorter
    let [num, operation1, operation2, operation3, operation4, operation5] = array;
    num = Number(num);

    for (let i = 1; i < array.length; i++){
        let element = array[i];
        console.log(num = cook(num,element));
    }

    // console.log(num = cook(num, operation1));
    // console.log(num = cook(num, operation2));
    // console.log(num = cook(num, operation3));
    // console.log(num = cook(num, operation4));
    // console.log(num = cook(num, operation5));

    function cook (num, operator) {
        switch (operator) {
            case 'chop':
                return num / 2;
                break;
            case 'dice':
                return Math.sqrt(num);
                break;
            case 'spice':
                return num + 1;
                break;
            case 'bake':
                return num * 3;
                break;
            case 'fillet':
                return num * 0.80; //•	fillet – subtract 20% from number
                break;
            default:
                break;
        }
    }
}

cookingByNums([32, 'chop', 'chop', 'chop', 'chop', 'chop']);