const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
class ArrError extends Error{
  constructor(message){
    super(message);
    this.name = "ArrError";
  }
}
function transform(arr) {
  const controlSeq =['--discard-next','--discard-prev','--double-next','--double-prev'];
  if(!Array.isArray(arr))  {
    throw new ArrError("'arr' parameter must be an instance of the Array!")
  }
  res =[];
  for (let i=0; i < arr.length; i++)  {
    let toDouble = false;
    let deleted = false;
    if(!controlSeq.includes(arr[i])){
      if(i){
        switch (arr[i-1]) {
          case controlSeq[0]: // --discard-next
            deleted = true;
            break;
          case controlSeq[2]:  //-double-next
            toDouble = true;
        }
      }
      if (!deleted && (i < (arr.length - 1))){
        switch (arr[i+1]){
          case controlSeq[1]:  //--discard-prev
            if (toDouble){
              //res.push(arr[i])  ///maybe alternatives
              toDouble = false;
            }else{ 
              deleted = true;
            }
            break;
          case controlSeq[3]: //--double-prev
            if(toDouble) {
              res.push(arr[i]);
              res.push(arr[i]);
              toDouble = false;
            }
          break;
        }
      }
      if(!deleted){
        if (toDouble){
          res.push(arr[i])
        }
        res.push(arr[i])
      }
    }
  }
  return res;
} 

console.log(transform([1, 2, 3, '--double-next', 4, 5]));


module.exports = {
  transform
};
