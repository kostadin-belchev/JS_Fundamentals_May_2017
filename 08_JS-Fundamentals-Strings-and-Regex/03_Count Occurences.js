function countOcurrencies (searchString, text) {
    let counter = 0;
    let step = searchString.length;
    for (let i = 0; i < text.length; i++) { //looping through each letter of the text
        if (searchString == text.substr(i,step)) {
            counter++;
        }  
    }
    return counter;
}

console.log(
    countOcurrencies('ma', 
'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));
