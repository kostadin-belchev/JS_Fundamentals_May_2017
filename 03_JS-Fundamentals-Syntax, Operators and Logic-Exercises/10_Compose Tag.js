function generateImageTagInHTML (arr) {
    let fileLocation = arr[0];
    let alternateText = arr[1];
    return `<img src="${fileLocation}" alt="${alternateText}">`
}

console.log(generateImageTagInHTML(['smiley.gif', 'Smiley Face']));
