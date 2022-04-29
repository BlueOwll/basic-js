const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 class ValidationDateError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidError"; // (2)
  }
}

function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!arguments.length) {return "Unable to determine the time of year!"}
  //console.debug('Date.prototype.isPrototypeOf(date)' + Date.prototype.isPrototypeOf(date));
  if (!(date.constructor.name === "Date") || (!Date.prototype.isPrototypeOf(date)) ||(!(date instanceof Date))) {throw new ValidationDateError('Invalid date!');}
  switch(date.getMonth()){
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
  }
}

//console.log(getSeason("999"));

module.exports = {
  getSeason
};
