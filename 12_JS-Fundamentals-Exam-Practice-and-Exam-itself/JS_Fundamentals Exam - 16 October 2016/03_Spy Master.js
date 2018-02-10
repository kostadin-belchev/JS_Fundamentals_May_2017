function spies (array = []) {
    let specialKey = array.shift();
    let regex = new RegExp(`( |^)(${specialKey}\\s+)([!%$#A-Z]{8,})( |\\.|,|$)`, 'gi');
    let result = '';
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            if (!hasLowerCase(m[3])) {
               let wordFound = m[3].toLowerCase();
               wordFound;
               wordFound = wordFound.replace(/!/g, '1')
               wordFound = wordFound.replace(/%/g, '2')
               wordFound = wordFound.replace(/#/g, '3')
               wordFound = wordFound.replace(/\$/g, '4')
               wordFound;
               array[i] = array[i].replace(m[0], m[1] + m[2] + wordFound + m[4])
            }
        }
        console.log(array[i]);
        
    }

    function hasLowerCase(str) {
        return str.toUpperCase() != str;
    }
}

spies(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
    ])