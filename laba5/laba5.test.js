const TPO = require('./laba5')
const Test = new TPO()

describe('Square matrix', () =>{

  let matrix = [
    [0,0],
    [0,1]
  
  ]
  let k = 4;

  test('should be defined', () => {
    expect(Test.rotate(matrix,k)).toBeDefined()
    expect(Test.rotate(matrix,k)).not.toBeUndefined()
  })


  test('result should be', () => {
      let result = [ [ 1, 1 ], [ 0, 1 ] ]
    expect(Test.rotate(matrix,k)).toEqual(result)
  })

})


describe('Is have eeeee', () =>{
  test('should be defined', () => {
    expect(Test.is5CharactersE).toBeDefined()
    expect(Test.is5CharactersE).not.toBeUndefined()
  })

  test('result should be right', () => {
  expect(Test.is5CharactersE('edueeeee')).toEqual(true)
  expect(Test.is5CharactersE('eduee')).toEqual(false)
  expect(Test.is5CharactersE('')).toEqual(false)
  expect(Test.is5CharactersE('eeeeedffdfdfdfs')).toEqual(true)
  expect(Test.is5CharactersE('eddsedesefe')).toEqual(false)
})
})



describe('Count empty string', () =>{
  test('should be defined', () => {
    expect(Test.readFile).toBeDefined()
    expect(Test.readFile).not.toBeUndefined()
    expect(Test.readFile).not.toBe(null)
  })

  test('result should be right', () => {
  expect(Test.readFile('file.txt')).toBeGreaterThanOrEqual(0)

})
})
// const Lodash = require('./laba5')

// let _ = new Lodash()

// describe('Lodash: compact', () => {
//   let array = [false, 42, 0, '', true, null, 'hello']

//   beforeEach(() => {
//     array = [false, 42, 0, '', true, null, 'hello']
//   })

//   afterAll(() => {
//     _ = new Lodash()
//   })

//   test('should be defined', () => {
//     expect(_.compact).toBeDefined()
//     expect(_.compact).not.toBeUndefined()
//   })

//   test('should working array be editable', () => {
//     array.push(...['one', 'two'])
//     expect(array).toContain('one')
//     expect(array).toContain('two')
//   })

//   test('should remove falsy values from array', () => {
//     const result = [42, true, 'hello']
//     expect(_.compact(array)).toEqual(result)
//   })

//   test('should NOT contain falsy values', () => {
//     expect(_.compact(array)).not.toContain(false)
//     expect(_.compact(array)).not.toContain(0)
//     expect(_.compact(array)).not.toContain('')
//     expect(_.compact(array)).not.toContain(null)
//   })

// })


// describe('Lodash: groupBy', () => {
//   test('should be defined', () => {
//     expect(_.groupBy).toBeDefined()
//     expect(_.groupBy).not.toBeUndefined()
//   })

//   test('should group array items by Math.floor', () => {
//     const array = [2.2, 2.4, 4.2, 3.1]
//     const result = {
//       2: [2.2, 2.4],
//       4: [4.2],
//       3: [3.1]
//     }
//     expect(_.groupBy(array, Math.floor)).toEqual(result)
//   })

//   test('should group array items by length', () => {
//     const array = ['one', 'two', 'three']
//     const result = {
//       5: ['three'],
//       3: ['one', 'two']
//     }
//     expect(_.groupBy(array, 'length')).toEqual(result)
//   })

//   test('should NOT return array', () => {
//     expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
//   })
// })