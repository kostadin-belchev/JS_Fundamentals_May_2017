function uniqueSequences (input = []) {
    let seqs = new Map();
    for (const element of input) {
        let array = JSON.parse(element).map(e => Number(e)).sort((a, b) => b - a); //Each individual array should be printed in descending order 
        //array;
        let arrayToCompare = `[${array.join(', ')}]`
        if (!seqs.has(arrayToCompare)) {
            seqs.set(arrayToCompare, array.length);
        }
    }
    //seqs;

    // SORTING
    //After storing all arrays, your program should print them back in ascending order based on their length, 
    // if two arrays have the same length they should be printed in order of being received from the input. 
    seqs = new Map([...seqs].sort((a, b) => {
        return a[1] - b[1];
    }));
    //seqs;

    // PRINTING
    for (const [array, lengthOfArray] of seqs) {
        console.log(array);
    }
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
    ])