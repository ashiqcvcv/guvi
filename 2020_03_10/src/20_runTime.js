/*--RUNTIME

  You are given some code in the form of a function. 
  Measure and return the time taken to execute that code.

  For example: runTime(someFunction) returns 17
*/

var runTime;
const { performance } = require('perf_hooks');

runTime = function(func) {
    var start = performance.now();
    func;
    var end = performance.now();
    var time = end - start;
    return time;
};
/*--Mocha Testing--*/

function test() {
    var result = [];
    for (i = 0; i <= 9999999; i++) {
        result.push(i);
    }
    return result;
}
console.log(runTime(test()));
module.exports = runTime;