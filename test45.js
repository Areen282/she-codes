objectToTest = { 
fetch() { return [1,2,3];} , 
decorateFetchedList() { 
input = this.fetch() 
return input.map( (x)=> '*' + x + '*' );
}, };
const { mock } = require('node:test');
fakeinput = ['a','b','c'];
proxy = mock.method(objectToTest ,'fetch');
proxy.mock.mockImplementation( () => return fakeinput;})
const assert = require ('node:assert') ;
const { test } = require ('node:test') ;
test( 'testing with a mock' , (t) => {
returnValue = objectToTest.decorateFetchedList() ; 
assert.strictEqual( returnValue[0], '*a*');
});
