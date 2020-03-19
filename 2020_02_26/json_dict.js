/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).
Example
    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
*/

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
var countWords = inputWords.reduce((count, obj) => {
    count[obj] = (count[obj] || 0) + 1;
    return count;
}, {})

console.log(countWords);