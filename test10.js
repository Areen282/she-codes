const test = require ('node:test') ;
const assert = require ('node:assert') ; 
function checklength (arr) 
{
let length = 0; 
length = arr.length; 
if (length == 0) 
{
return length }
else { return arr.length }; }
test ("my third test" , (j) => {let arr = []; let result = checklength(arr);
assert.strictEqual(result,0)});
