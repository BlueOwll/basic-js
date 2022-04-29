const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
class ChainError extends Error{
  constructor(message){
    super(message);
    this.name = 'ChainError';
  }
}
const chainMaker = {
  _chain : [],
  getLength() {
    return this._chain.length;  
  },
  addLink(value) {
    if (!arguments.length){
      value ='';
    }
    this._chain.push(value);
    return this;
  },
  removeLink(position) {
    console.log(this._chain);
    console.debug(!arguments.length,typeof position !='number',position%Math.floor(position),(position < 1),(position > this._chain.length), this._chain.length,"<",position );
    if (!arguments.length || (typeof position !='number') || (position%Math.floor(position)) || (position < 1) || (position > this._chain.length)) {
      this._chain =[];
      throw new ChainError("You can't remove incorrect link!")
    }
    this._chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    for (let i = 0; i< this._chain.length; i++){
      res +='( '+this._chain[i]+ ' )';
      if ( i != (this._chain.length-1)){
        res += '~~';
      }
    }
    this._chain =[];
    return res;
  }
};
//console.log('res = '+ chainMaker.addLink('5').addLink('78').reverseChain().removeLink('rr').finishChain());

module.exports = {
  chainMaker
};
