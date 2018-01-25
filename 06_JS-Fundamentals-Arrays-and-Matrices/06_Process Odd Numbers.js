function processOddNums (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 != 0) {
            result.push(element*2);
        }
    }
    result.reverse();
    return result.join(' ');
}

let processOddNumsV2 = (array) => array.filter((e, i) => i % 2 != 0).map(e => e*2).reverse().join(' ');

console.log(processOddNums([10, 15, 20, 25]));

