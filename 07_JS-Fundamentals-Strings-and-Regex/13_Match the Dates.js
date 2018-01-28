function matchTheDates (array) {
    const regex = /\b(\d{1,2})-([A-Z][a-z][a-z])-(\d{4})\b/gm;
    let m;
    for (let i = 0; i < array.length; i++) {
        const str = array[i];
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            console.log(`${m[0]} (Day: ${m[1]}, Month: ${m[2]}, Year: ${m[3]})`);
        }
    }
}
matchTheDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.',
    ])
