const{returnTwo, greeting, add} = require('./functions')
test('should return 2', () => {
  expect(returnTwo()).toEqual(2)
})
test('expect greeting', () =>{
  expect(greeting('lucas')).toEqual('Hello lucas')
});
test('should add two numbers', ()=>{
    expect(add(1, 2)).toEqual(3)
})