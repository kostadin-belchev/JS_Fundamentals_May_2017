function captureTheNums (array = []) {
    
    let regex = /\d+/g;
    let text = array.join(' ');
    let nums = text.match(regex);

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     text += element;
    // }
    // let match = regex.exec(text);

    // while (match) {
    //     nums.push(match[0]);
    //     match = regex.exec(text);
    // }
    console.log(nums.join(' '));
}
captureTheNums(['123a456',
    '789b987',
    '654c321',
    '0',
    ])