function surveyParser (str = '') {
    let invalidMessage = true;
    let noSurveyFound = true;
    let label = '';
    let average = 0;
    const surveyRegex = /(?:.*)<svg>(.*)<\/svg>(?:.*)/g;

    let m1;

    while ((m1 = surveyRegex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m1.index === surveyRegex.lastIndex) {
            surveyRegex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m1.forEach((match, groupIndex) => {
            noSurveyFound = false;
            // break; for faster stoppage if needed
        });
    }

    if (noSurveyFound) {
        console.log(`No survey found`);
        return;
    } else {
        const regex = /(?:.*)<svg><cat><text>(?:.*)\[(.*)\]<\/text><\/cat>\s*<cat>(<g>(.*)<\/g>)*<\/cat><\/svg>(?:.*)/g;
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                invalidMessage = false;
                // break; for faster stoppage if needed
            });
        }

        if (invalidMessage) {
            console.log(`Invalid format`);
            return;
        } else {
            // Do program continued
            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                
                // The result can be accessed through the `m`-variable.
                label = m[1];
                let ratingsString = m[2]; // need to check with regex if ratings are valid and match only valid ones toward countings

                let ratingRegex = /<g><val>([1-9]|10)<\/val>(0|(?:[1-9][0-9]*))<\/g>/g;;
                let totalVoteValue = 0;
                let countedVotes = 0;
                let votes = [];
                let match;
                

                while ((match = ratingRegex.exec(ratingsString)) !== null) {
                    // The result can be accessed through the `match`-variable.
                    let value = Number(match[1]);
                    let count = Number(match[2]);
                    votes.push(count);
                    let voteValue = value * count;
                    totalVoteValue += voteValue;
                }
                countedVotes = votes.reduce((a,b) => a + b);
                average = totalVoteValue / countedVotes;
                average;
                let test = average.toFixed(1);
                test;
            }
        }
    }
    
    console.log(`${label}: ${Math.round(average * 100) / 100}`);
}

//surveyParser(`<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>`)