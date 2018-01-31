function startsWith (text = '', str) {
    if (text.indexOf(str) >= 0) {
        return true;
    } else
        return false;
}

console.log(startsWith('How have you been?',
   'how'
    ));
