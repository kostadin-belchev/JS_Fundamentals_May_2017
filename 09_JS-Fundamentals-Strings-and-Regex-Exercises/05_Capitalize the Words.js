function capitalizeFirstLettersOnly (str = '') {
    return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
    // let words = str.split(/\s/gm).filter(s => s!='');
    // words;
    // let resultStringArray = [];
    // for (let i = 0; i < words.length; i++) {
    //     const element = words[i]; //element is each word
    //     let resultWord = '';
    //     for (let j = 0; j < element.length; j++) {
    //         let letter = element[j]; //letter is each letter of each word
    //         if (j == 0) {
    //             letter = letter.toUpperCase();
    //         } else
    //             letter = letter.toLowerCase();
    //         resultWord += letter;
    //     }
    //     resultStringArray.push(resultWord)
    // }
    // return resultStringArray.join(' ');
}

console.log(capitalizeFirstLettersOnly('Was that Easy? tRY thIs onE for SiZe!'));
