function wordOccurences (text = '', word = '') {
    word = '\\b' + word + '\\b';
    word;
    const regex =  new RegExp(word, 'gi');
    //let m = regex.exec(text);
    let wordCount = 0;
    let m;
    let variables = [];
    while ((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        variables.push(m[0]);
    }
    return variables.length;
}

console.log(wordOccurences('There was one. Therefore I bought it. I wouldn�t buy it otherwise.',
    'there'
    ));
