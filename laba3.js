var fs = require('fs');

class TPO {
    // constructor(firstName, lastName) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

   rotate(matrix, k)  {
        let isSquare = isSquareMatrix(matrix)
        if (isSquare == 'neverno') return 'matrix is no square'
        
        var result = [...matrix];
        let size = matrix[0].length
        var delta = matrix
        
        for (let d = 0; d < k; d++) {
            for (let i = 0; i < size; i++)  {
                for (let j = 0; j < size; j++) {
              result[i][j] = delta[size - j - 1][i]
            }
          }
          delta = result
        }
      
    
        return result
    }
}