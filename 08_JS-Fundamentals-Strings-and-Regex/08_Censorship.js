function censor (text = '', arrayOfCensoredWords) {
    for (let word of arrayOfCensoredWords) {
        let replacementString = '-'.repeat(word.length);
        while (text.indexOf(word) != -1) {
            text = text.replace(word, replacementString);
        }

    }
    return text;
    //the function below does what the repeat function does and repeat is already included by default in node.js
    // function stringGenerator (symbol, count) {
    //     let resulingString = '';
    //     for (let i = 0; i < count; i++)
    //         resulingString += symbol;
    //     return resulingString;
    // }
    return text;
}

console.log(censor('roses are red, violets are blue', [', violets are', 'red']));
