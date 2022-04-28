const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)){ return 0}
    let depth = 0;
    //console.log('enter the func ' + arr);
    for(let i = 0; i < arr.length; i++){
      let depthI = this.calculateDepth(arr[i]);
      if(depth < depthI){
        //console.log('depthI '+ depthI);
        depth = depthI;
      }
     // console.log(arr[i]);
    }
    
    return depth + 1;
  }
}
const depthCalc = new DepthCalculator();
console.log("res = "+depthCalc.calculateDepth([1, 2, 3, 4, 5]));
console.log("res = "+depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
console.log("res = "+depthCalc.calculateDepth([[[]]]));

module.exports = {
  DepthCalculator
};
