function formFiller (username, email, phone, array = []) {
        const usernameRegex = /<![A-Za-z]+!>/gm;
        const emailRegex = /<@[A-Za-z]+@>/gm;
        const phoneRegex = /<\+[A-Za-z]+\+>/gm;
        let resultingText = '';

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        resultingText += element + '\n';
    }
    resultingText = replacerFunction(resultingText, usernameRegex, username);
    resultingText = replacerFunction(resultingText, emailRegex, email);
    resultingText = replacerFunction(resultingText, phoneRegex, phone);

    console.log(resultingText);

    function replacerFunction (text, regex, dataToReplace) {
        for (let i = 0; i < text.length; i++) {
            while (true) {
                let match = regex.exec(text);
                if (match != null) {
                    text = text.split(match).join(dataToReplace);
                }
                else {
                    break;
                }
            }
        }
        return text;
    }
}

// formFiller('Pesho',
// 'pesho@softuni.bg',
// '90-60-90',
// ['Hello, <!username!>!',
//  'Welcome to your Personal profile.',
//  'Here you can modify your profile freely.',
//  'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//  'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//  'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
// );