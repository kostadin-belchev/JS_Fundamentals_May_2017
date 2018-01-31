function extractLinks (array) {
    const regex = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/gm;
    for (let i = 0; i < array.length; i++) {
        const str = array[i];
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            console.log(m[0]);
        }
    }
}
    
extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko ',
    ])