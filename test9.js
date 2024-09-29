const test = require ('node:test') ;
const assert = require ('node:assert') ; 
function countletters(string ,letter) {                
let counter = 0; 
for (let i=0; i<string.length ; i++ ) 
{
if (string[i] == letter) {counter++}} return counter }; 
test('my secod test', (f) => { let result = countletters('shecodes','e')
assert.strictEqual(result,2)});
