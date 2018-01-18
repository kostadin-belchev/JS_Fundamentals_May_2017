function wordsToUpperCase(str) {
    const regex = /\w+/gm;
    //const str = `Hi, how are you?`;
    let m;
    let resultingString = '';
    let resultArray = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match) => {
            resultArray.push(match.toUpperCase());
        });
    }
    
    return resultArray.join(', ');
}

console.log(wordsToUpperCase('Hi, how are you?'));
//console.log('hello');


