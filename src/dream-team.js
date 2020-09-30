const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === '') return;
  let arr='';
  members = members.map(item => item.trim().toUpperCase());
  members = members.sort();
  for (let i = 0; i < members.length; i++){
    if(typeof members[i] !== 'string') {
      arr += '';
    }
    else {
      arr += members[i].slice(0,1);
    }
  }
    return arr;
  
};





//   return
//     members.forEach((element) => {
//       element.slice(0,1)}).sort().join('')
 
// without type check

//       let arr='';  
//       for (let i = 0; i < members.length; i++){
//         if(typeof members.sort()[i] !== 'String') {
//           arr += '';
//         }
//         else {
//           arr += members.sort()[i].slice(0,1);
//         }
//       }
//         return arr;
      