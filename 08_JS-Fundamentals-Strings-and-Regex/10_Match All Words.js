function matchAllWordAndPrintThem (text) {
    const regex = /\w+/g;
    const str = text;
    let m;
    let words = [];
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            words.push(match);
        });
    }
    return words.join('|');
}

console.log(matchAllWordAndPrintThem('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
