        // our main spiral function that will
      // return a final spiral ordered list
function spiralMatrix (x, y) { 

    let counter = 1;
    let matrix =  createNumMatrix(x, y);
    function createNumMatrix (x, y) {
        let matrix = [];
        let counter = 1;
        for (let i = 0; i < x; i++) {
            matrix[i] = [];
        }
    
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < y; j++) {
                matrix[i].push(counter++);
            }        
        }
        return matrix;
    }

    // where we store our final spiraled list
    var spir = [];
        
    while (matrix.length > 0) {
      
      // if only 1 more element left in matrix
      if (matrix.length === 1) { 
        spir.push(matrix[0]); 
        break;
      }
      
      // return the spiraled list of the top row and
      // right column for this matrix
      var tr = layerTopRight(matrix);
      spir.push(tr);
      
      // return the spiraled list of the bottom row and
      // left column for this matrix
      var bl = layerBottomLeft(matrix);
      spir.push(bl);
  
    }
    
    return spir.toString().split(' ').join(' ');
    
    function layerTopRight(matrix) {
  
        // remove and store the first row from matrix
        var top = matrix.splice(0, 1);
        
        // store the right column of the matrix
        var right = [];
        
        // remove the last column from the matrix
        for (var i = 0; i < matrix.length; i++) {
          var e = matrix[i].splice(-1, 1);  
          right.push(e);
        }
        
        // return the top row and last column elements as a list
        return top.concat(right).toString().split();
        
    }
      
    function layerBottomLeft(matrix) {
        
        // remove and store the last row from matrix in reverse order
        var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();
        
        // store the left column of the matrix
        var left = [];
        
        // remove the first column from the matrix
        for (var i = 0; i < matrix.length; i++) {
          var e = matrix[i].splice(0, 1);  
          left.push(e);
        }
        
        // return the top row and last column elements as a list
        return bottom.concat(left.reverse()).toString().split();
        
    }
}

//console.log(spiralMatrix(5, 5));