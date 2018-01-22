function figureOf4Squares (n) {
    
    if (n % 2 == 0 && n != 2) { // n is even, then we have n-1 lines
        //first line
        let line = '+';
        for (let i = 1; i <= n - 2; i++) {
            line += '-';
        }
        line += '+';
        for (let i = 1; i <= n - 2; i++) {
            line += '-';
        }
        line += '+';
        console.log(line);
        
        //first half
        for (let j = 1; j < n/2 - 1; j++) {
            let line = '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            console.log(line);
        }

        //middle line
        console.log(line);
        
        //second half
        for (let j = 1; j < n/2 - 1; j++) {
            let line = '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            console.log(line);
        }

        //last line
        console.log(line);

    }
    else if (n == 2) {
        let line = '+++';
        console.log(line);
    }
    else { // n is odd, then we have n lines
        //first line
        let line = '+';
        for (let i = 1; i <= n - 2; i++) {
            line += '-';
        }
        line += '+';
        for (let i = 1; i <= n - 2; i++) {
            line += '-';
        }
        line += '+';
        console.log(line);
        
        //first half
        for (let j = 1; j <= n/2 - 1; j++) {
            let line = '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            console.log(line);
        }

        //middle line
        console.log(line);
        
        //second half
        for (let j = 1; j <= n/2 - 1; j++) {
            let line = '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            for (let i = 1; i <= n - 2; i++) {
                line += ' ';
            }
            line += '|';
            console.log(line);
        }

        //last line
        console.log(line);
    }
}

//figureOf4Squares(5);
//figureOf4Squares(6);
//figureOf4Squares(6);