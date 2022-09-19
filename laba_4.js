
const fs = require('fs');

 class SquareMatrixArray {
     constructor(){
        this.squareMatrixArray = []
     }
  

    addMatrixs() {
    let matrix = SquareMatrix([[0,2],[0,1]])
    this.squareMatrixArray.push(matrix)
  }
  
  rotate(matrix, k)  {
    if(k <0 ) return 'k is wrong'
      let isSquare = SquareMatrix.isSquareMatrix(matrix)
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

 class SquareMatrix {
  
constructor(){
    this.matrix = [[]]
} 
  
  init(matrix) {
    self.matrix = isSquareMatrix(matrix ? matrix : []) 
  }

  static isSquareMatrix(matrix) {
    for(let item in matrix){
            if(matrix[item].length != matrix[Number(item + 1)].length){
                return 'neverno'
             }      
    }
}
}

class Tester {
    constructor(){
        this.squareMatrixArray;
        this.init()
    }
  
  
  init() {
    console.log("OK")
    this.run()
  }
  
  Init() {
    this.squareMatrixArray = new SquareMatrixArray()
  }
  
    dump() {
     if(!squareMatrixArray.length) {
      Logger.log("Пустой массив")
      return
    }
    
    Logger.log("///////////////Массив матриц/////////////")
    squareMatrixArray.squareMatrixArray.forEach(item =>{
      Logger.log(`Element: ${element.matrix}`)
    })     
    Logger.log("/////////////////////////////////////////")

  }
  
    squareArrayTest1() {
    this.Init()
    Logger.log("//////////////////squareArrayTest1/////////////////")
    Logger.log("Проверяем, создаётся ли объект типа SquareMatrix")
    this.dump()
    this.squareMatrixArray.addMatrixs()
    Logger.log("Команда добавлена")
    this.dump()
  }
  
  run() {
    this.squareArrayTest1()
    console.log("Run")
  }
}


class Logger {
    static  log(_message) {
      if (fs.existsSync('myloger.txt')) {
        let date = new Date('dd-MM-yyyy');
        fs.writeFileSync('myloger.txt', `${date}:${_message} `);
      }
      else{
        console.log('file not found')
      }
    }
}

var tester = new Tester()
