function lost(keyword = '', text = '') {
    const northEastRegex = /(north|east)\D*(\d{2})[^,]*\,\D*(\d{6})/gmi;
    const str = text;
    let m;
    let degreesN = '';
    let decimalsN = '';
    let dicrectionN = '';
    let degreesE = '';
    let decimalsE = '';
    let dicrectionE = '';
    let message = '';


    while ((m = northEastRegex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === northEastRegex.lastIndex) {
            northEastRegex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        let direction = m[1][0].toUpperCase();
        if (direction == 'N') {
            directionN = direction;
            degreesN = m[2];
            decimalsN = m[3];
        } else {
            directionE = direction;
            degreesE = m[2];
            decimalsE = m[3];
        }
           
    }

    console.log(`${degreesN}.${decimalsN} N`);
    console.log(`${degreesE}.${decimalsE} E`);
    
    // DO THE MESSAGE
    let regexString = `${keyword}` + '(.*)' + `${keyword}`;
    let messageRegex = new RegExp(regexString, 'gmi')
    messageRegex;

    let match = messageRegex.exec(text);

    while (true) {
        if (match != null) {
            message = match[1];
        } else {
            break;
        }
        match = messageRegex.exec(text);
    }

    console.log(`Message: ${message}`);
    
}

lost('<>',
    `o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`)