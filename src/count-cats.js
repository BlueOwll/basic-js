const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(boxes) {
  let cats = 0;
  //console.log(boxes);
  for (let i=0; i < boxes.length; i++){
    cats += boxes[i].filter(box => box === '^^').length;
    //console.log(cats); 
  }  
  return cats;
}

cats =[[0, 1, '^^'],
            [0, '^^', 2],
            ['^^', 1, 2]];
console.log(countCats(cats));

module.exports = {
  countCats
};

