
var fs = require('fs');
// MARK: FIRST TASK
// Rotate by 90 * k degrees function

function rotate(matrix, k)  {
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

function isSquareMatrix(matrix) {
    // console.log(matrix)
    for(let item in matrix){

            if(matrix[item].length != matrix[Number(item + 1)].length){
                return 'neverno'
             }      
    }

}

// Один тест на количество
let matrix = [
    [0,0,2],
    [0,1]

]
let k = 4;
let rotated = rotate(matrix, k)
console.log(`Перевернутая матрица`, rotated)


// MARK: SECOND TASK

function is5CharactersE(stroka) {
if(stroka.includes("eeeee")){
    return true
}
else{
    return false
}
}

// В начале, в конце, в середине, присутствуют не все e, отсутствуют e
let str = 'i tut'
console.log('Имеются ли в строке 5 идущих подряд букв e', is5CharactersE(str) )


function readFile(name){
    var data = fs.readFileSync(name, 'utf8');
    let count = 0;
    for(let stroka of data.split('\n')){
        let curStroke = String(stroka);
  
        if(curStroke.length <= 1) count++;
        
    }
   
        return count
   
    
}

console.log('Количество пустых строк',readFile('file.txt'))

