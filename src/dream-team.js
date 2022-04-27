const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //console.log(members);
  if (!Array.isArray(members)) {
     console.log('false');
    return false;
  }
  for (let i=0; i< members.length;i++){
    if((typeof members[i] ==='string') && (members.length > 0) ){
      members[i] = members[i].replace(/ +/, '').toUpperCase()[0]; 
    }else{
      members[i] = '';
    }
  }
 // for (let member of members) {
 //   member = member.replace(/ +/, '');
 //   console.log(member);
 ///\ }
  return members.sort().join('');
  
}
console.log(createDreamTeam(['      Matt', 'Ann', 'Dmitry', 'Max']));
module.exports = {
  createDreamTeam
};
