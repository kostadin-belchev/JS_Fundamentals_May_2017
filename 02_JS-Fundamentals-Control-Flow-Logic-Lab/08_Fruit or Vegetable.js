function fruitOrVeggie(inputStr) {
    switch (inputStr) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach": 
            return "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            return "vegetable";
            break;
        default:
            return "unknown";
            break;
    }
}

console.log(fruitOrVeggie("banana"))
