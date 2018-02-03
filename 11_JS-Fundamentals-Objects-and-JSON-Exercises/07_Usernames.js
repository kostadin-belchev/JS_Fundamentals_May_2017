function usernames (array = []) {
    let uniqueUsernamesSet = new Set();
    for (const inputLine of array) {
        uniqueUsernamesSet.add(inputLine);
    }

    // SORTING
    return Array.from(uniqueUsernamesSet).sort((a, b) => { //order them by their length, in ascending order, as first criteria, and by alphabetical order as second criteria
        if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }).join('\n');
}

console.log(usernames([
'Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot',
]))