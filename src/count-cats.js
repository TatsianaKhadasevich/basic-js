const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let count = 0;
  for (let i=0; i < matrix.length; i++ ) {
  for (let n=0; n < matrix[i].length; n++ ){
  if( matrix[i][n] === '' || matrix[i][n] === null ||
  typeof matrix[i][n] !== 'string') {
  count +=0;
  } else {
  count += matrix[i][n].trim().includes('^^');
  }
  }
  }
  return count;
    
};


// let count = 0;
//   for (let i=0; i < matrix.length; i++ ) {
//   for (let n=0; n < matrix[i].length; n++ ){
//   if(matrix[i][n].toString() !== matrix[i][n]) {
//   count +=0;
//   } else {
//   count += matrix[i][n].trim().includes('^^');
//   }
//   }
//   }
//   return count;