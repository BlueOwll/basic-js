const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result =0;
  let strArr = s2.split('');
  console.log(strArr);
  for (let letter of s1){
    console.log('letter ='+ letter +" strArr i" + strArr.indexOf(letter));
    if (strArr.indexOf(letter) != -1){
      result++;
      let l =strArr.indexOf(letter);
      //console.log('letter ='+ letter +" strArr i" + strArr[l]);
      strArr.splice(l,1);
      console.log('letter ='+ letter +" strArr i" + strArr + "result = " + result);
    }
  }
  return result;
}
console.log(getCommonCharacterCount("aabcc", "adcaa"));

module.exports = {
  getCommonCharacterCount
};
