function countWordsWithMap (array) {
    let text = array[0].toLowerCase();
    let words = text.split(/\W/g).filter(s=>s!='');
    let wordsMap = new Map();
    //words;
    for (const word of words) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 0);
        }
        wordsMap.set(word, wordsMap.get(word) + 1);
    }
    let sortedMapArray = [...wordsMap].sort();
    let allWords = Array.from(wordsMap.keys()).sort();
    //wordsMap;
    // allWords.forEach( w => {
    //     console.log(`'${w}' -> ${wordsMap.get(w)} times`);
    // });
    for (const kvp of sortedMapArray) {
        console.log(`'${kvp[0]}' -> ${kvp[1]} times`);
    }
}

console.log(countWordsWithMap([`Far too slow, you're far too slow.`]));
