function reverseAndConcat (array = []) {
    let result = '';
    array.reverse();
    for (let i = 0; i < array.length; i++) {
        let element = reverseString(array[i]);
        result += element;
    }
    function reverseString (string) {
        let stringArray = string.split("");
        stringArray.reverse();
        return stringArray.join("");
    }
    return result;
}

console.log(reverseAndConcat(['I', 'am', 'student']));
