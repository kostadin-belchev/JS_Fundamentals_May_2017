function countWordsInText (array) {
    let text = array[0];
    let wordsAndCounts = {};

    let words = text.split(/\W/g).filter(s => s!='');
    //words;
    for (const word of words) {
        //word;
        if (!wordsAndCounts.hasOwnProperty(word)) {
            wordsAndCounts[word] = 0;
        }
        wordsAndCounts[word]++;
    }
    return JSON.stringify(wordsAndCounts);
}

console.log(countWordsInText([`Far too slow, you're far too slow.`]));
