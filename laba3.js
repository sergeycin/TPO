var fs = require('fs');

class TPO {

// MARK: FIRST TASK
// Rotate by 90 * k degrees function
   rotate(matrix, k)  {
      if(k <0 ) return 'k is wrong'
        let isSquare = this.isSquareMatrix(matrix)
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


     isSquareMatrix(matrix) {
      for(let item in matrix){
              if(matrix[item].length != matrix[Number(item + 1)].length){
                  return 'neverno'
               }      
      }
  }

// MARK: SECOND TASK

 is5CharactersE(stroka) {
  if(stroka.includes("eeeee")){
      return true
  }
  else{
      return false
  }
  }

// MARK: THREE TASK
   readFile(name){
    var data = fs.readFileSync(name, 'utf8');
    let count = 0;
    for(let stroka of data.split('\n')){
        let curStroke = String(stroka);
  
        if(curStroke.length <= 1) count++;
        
    }
   
        return count
    
}

}


const Test = new TPO()
// Один тест на количество
let matrix = [
  [0,0,2],
  [0,1]

]
let k = -4;
let rotated = Test.rotate(matrix, k)
console.log(`Rotateded matrix`, rotated)




// В начале, в конце, в середине, присутствуют не все e, отсутствуют e
let str = 'i tut'
console.log('Is have 5 e', Test.is5CharactersE(str) )



// В начале, в конце, в середине, присутствуют не все e, отсутствуют e
console.log('Count space string',Test.readFile('file.txt'))
