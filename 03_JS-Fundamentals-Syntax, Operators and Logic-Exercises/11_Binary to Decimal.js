function binaryToDecimal (binaryString) {
    let decimalValue = 0;
    for (let i = 0; i < binaryString.length; i++) {
        let element = binaryString[i];
        if (element == 1) { //you can play arround with the throughty expression here if you put a === you have to use '1' in order for it to work
            decimalValue += Math.pow(2, 7 - i);
        }
    }
    return decimalValue;
}

console.log(binaryToDecimal('00001001'));
console.log(binaryToDecimal('11110000'));

