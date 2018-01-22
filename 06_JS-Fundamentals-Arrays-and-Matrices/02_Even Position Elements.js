function elementsAtEvenPositions (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (i % 2 == 0) {
            result.push(element);
        }
    }
    return result.join(' ');
}

console.log(elementsAtEvenPositions(['20', '30', '40']));