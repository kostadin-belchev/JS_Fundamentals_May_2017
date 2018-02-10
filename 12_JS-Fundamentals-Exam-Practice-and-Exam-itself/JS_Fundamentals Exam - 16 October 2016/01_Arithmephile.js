function arithmephile (array = []) {
    array = array.map(Number)
    let biggestProduct = -Infinity;

    while (array.length > 0) {
        let num = array.shift();
        if (num < 0 || num >= 10) {
            continue;
        }
        let product = 1;
        for (let i = 0; i < num; i++) {
            product *= array[i];
        }
        if (product > biggestProduct)
            biggestProduct = product;
    }
    console.log(biggestProduct);
}

arithmephile([
    '-1',
    '20',
    '2', // s
    '-1',
    '-1',
    '3', // s
    '56',
    '20',
    '24',
    ])