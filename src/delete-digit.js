const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n+'';
  let tmpArr = str.split('');
  let max = Number(tmpArr.slice(1).join(''));
  //console.log(tmpArr.slice(1).join());
  for (let i = 0; i < tmpArr.length; i++){
    let tmp = tmpArr.slice();
    console.log(tmp);
    tmp.splice(i,1);
    num = Number(tmp.join(''));
    console.log(tmp + num);
    if (num > max){
      max = num;
    }
  }
  return max;
}

console.log(deleteDigit(1001));

module.exports = {
  deleteDigit
};
