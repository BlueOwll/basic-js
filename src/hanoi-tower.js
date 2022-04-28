const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 class HanoiCounter{
  constructor (num , speed){
  this.turns = Math.pow(2,num)-1;
  this.seconds = Math.floor(this.turns*3600/speed)
}
}
function calculateHanoi(disksNumber, turnsSpeed) {
  return new HanoiCounter(disksNumber,turnsSpeed);
}
console.log(calculateHanoi(9, 4308));

module.exports = {
  calculateHanoi
};
