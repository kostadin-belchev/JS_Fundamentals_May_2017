function xml (array = []) {
    const regex = /^<message( (?:([a-z]+)="[ .A-Za-z0-9]+"))+>(.*)<\/message>$/gm;
    for (let i = 0; i < array.length; i++) {
        const str = array[i];
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }
    }
    

}

xml(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`)