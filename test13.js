const test = require ('node:test') ;
const assert = require ('node:assert') ; 
function checkForNull(arr) 
{
for (let i=0; i< arr.length; i++) {
if (arr[i] == null){
return null; }
else {return "pass" 
}}}; 
test ("my forth test" , (k) => [let arr = [1,2,3,4,5,6,7,8,9,10]; let result= checkForNull(arr); 
assert.strictEqual(result,"pass")});
