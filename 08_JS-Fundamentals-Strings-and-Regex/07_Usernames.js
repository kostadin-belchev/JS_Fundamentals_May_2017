function usernamesFromEmails (array) {
    let usernames = [];
    for (let emailLine of array) {
        let emailTokens = emailLine.split('@');
        //emailTokens;
        let currUsername = emailTokens[0] + '.';
        //currUsername;
        let domains = emailTokens[1].split('.');
        //domains;
        for (const domain of domains) {
            currUsername += domain[0];
        }
        //currUsername;
        usernames.push(currUsername);
    }
    return usernames.join(', ');
}

console.log(usernamesFromEmails(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));
