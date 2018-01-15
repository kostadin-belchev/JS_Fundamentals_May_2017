function countLettersInString (array, letter) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === letter) {
            counter++;
        }
    }
    return counter;
}