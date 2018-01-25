function extractText (str) {
    const regex = /\((.*?)\)/g;
    //const str = `'Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'`;
    let m;
    let result = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (groupIndex == 1){
                result.push(match);
            }
            //console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
    return result.join(', ');
}
console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));