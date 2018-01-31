function endsWith (text ='', str) {
    for (let i = 0; i < text.length; i++) {
        
        let startOfSubstring = text.length - str.length;
        let substring = text.substr(startOfSubstring, str.length);
        if (substring == str) {
            return true;
        } else
            return false;
    }
}

console.log(endsWith('This sentence ends with fun?',
    'fun?'
    ));

console.log(endsWith('This is Houston, we have…',
    'We have…'
    ));

