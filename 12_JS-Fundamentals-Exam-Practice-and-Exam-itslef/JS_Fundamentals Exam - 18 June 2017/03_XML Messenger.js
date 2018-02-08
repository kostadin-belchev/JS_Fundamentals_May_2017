function xml (string = '') {
    const regex = /^<message (.*)>(.*)<\/message>$/gm;
    const attributesRegex = /([a-z]+)="([A-Za-z .0-9]+)"/gm;
    const str = string;
    let m;
    let isValidMessage = false;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        let attributes = m[1];
        attributes;
        let message = m[2];

        let missingAttribues = false;
        let m2 = attributesRegex.exec(attributes);
        let validFrom = '';
        let validTo = '';
        while (true) {
            if (m2 == null) {
                break;
            } else {
                let key = m2[1];
                key;
                let value = m2[2];
                value;
                if (key == 'from')
                    validFrom = key;
                if (key == 'to')
                    validTo = key;
            }
            m2 = attributesRegex.exec(attributes);
        }

        if (validFrom == 'from' && validTo == 'to') {
            isValidMessage = true;
        } else {
            missingAttribues = true;
        }

        if (missingAttribues == true) {
            console.log(`Missing attributes`);
            return;
        }
    }

    if (!isValidMessage) {
        console.log(`Invalid message format`);
    } else {
        console.log(`Is valid message!!!`);
    }
}

xml(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`)