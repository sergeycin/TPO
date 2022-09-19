

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
    }
  
  
  init() {
    print("OK")
    run()
  }
  
  Init() {
    squareMatrixArray = new SquareMatrixArray()
  }
  
    dump() {
     if(!squareMatrixArray.length) {
      Logger.log("Пустой массив")
      return
    }
    
    Logger.log("///////////////Массив матриц/////////////")
    squareMatrixArray.squareMatrixArray.forEach { element in
      Logger.log("Element: \(element.matrix)")
    }
    Logger.log("/////////////////////////////////////////")

  }
  
    squareArrayTest1() {
    Init()
    Logger.log("//////////////////squareArrayTest1/////////////////")
    Logger.log("Проверяем, создаётся ли объект типа SquareMatrix")
    dump()
    squareMatrixArray.addMatrixs()
    Logger.log("Команда добавлена")
    dump()
  }
  
  run() {
    squareArrayTest1()
    print("Run")
  }
}


final class Logger {

    static var logFile: URL? {
        guard let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else { return nil }
        let formatter = DateFormatter()
        formatter.dateFormat = "dd-MM-yyyy"
        let dateString = formatter.string(from: Date())
        let fileName = "\(dateString).log"
        return documentsDirectory.appendingPathComponent(fileName)
    }

    static func log(_ message: String) {
        guard let logFile = logFile else {
            return
        }

        let formatter = DateFormatter()
        formatter.dateFormat = "HH:mm:ss"
        let timestamp = formatter.string(from: Date())
        guard let data = (timestamp + ": " + message + "\n").data(using: String.Encoding.utf8) else { return }

        if FileManager.default.fileExists(atPath: logFile.path) {
            if let fileHandle = try? FileHandle(forWritingTo: logFile) {
                fileHandle.seekToEndOfFile()
                fileHandle.write(data)
                fileHandle.closeFile()
            }
        } else {
            try? data.write(to: logFile, options: .atomicWrite)
        }
    }
}

var tester = Tester()
