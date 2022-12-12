var fs = require('fs');
class IntegrationTest{

    constructor(){
        this.checkMatrixIndentify()
    }
  static  checkMatrixIndentify(matrix1,matrix2){
        let result = '';
   if((matrix1.length == matrix2.length)){
    for(let i=0; i< matrix1.length;i++){
      for(let j=0; j< matrix1[i].length;j++){
        if(matrix1[i][j] == matrix2[i][j]){
          result = true
        }
        else{
          return false
        }
      }
    }
   }
   else{
    return 'error'
  }
 if(result == true) return true
  }
  checkIsSquare(bolean1,bolean2){
    if(bolean1 == bolean2){
        return true
    }
  }

    }





class TPO {

// MARK: FIRST TASK
// Rotate by 90 * k degrees function
   rotate(matrix, k)  {
      if(k <0 ) return 'k is wrong'

        let isSquare = new isSquareMatrix(matrix)
        if (isSquare == false) return 'matrix is no square'
   

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


class isSquareMatrix{
    constructor(matrix){
        this.matrix = matrix;
        
        this.CheckisSquareMatrix(this.matrix)
    }

    CheckisSquareMatrix(matrix) {
        if(IntegrationTest.checkMatrixIndentify(matrix),[[0,0,2],[0,1]]){
            Loger.log('Матрица попавшая на проверку isSquare являются идентичными')
        }
        else{
            Loger.log('Матрица попавшая на проверку isSquare  не идентичны')
        }
        for(let item in matrix){
                if(matrix[item].length != matrix[Number(item + 1)].length){
                    return false
                 }else{
                    return true
                 }      
        }
    }
}


const Test = new TPO()
// Один тест на количество
let matrix = [
  [0,0],
  [0,1]

]
let k = 4;
let rotated = Test.rotate(matrix, k)
console.log(`Rotateded matrix`, rotated)




    class Loger{
        static  log(_message) {
            if (fs.existsSync('myloger.txt')) {
              let date = new Date('dd-MM-yyyy');
              fs.writeFileSync('myloger.txt', `${date}:${_message}`);
            }
            else{
              console.log('file not found')
            }
          }
    }

