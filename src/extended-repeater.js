const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options=null) {
  let res = '';
  if(options == null) return str.toString();
  let optionsObj = 
  {
    repeatTimes: (options.repeatTimes == null || typeof options.repeatTimes == 'undefined' )? 1:options.repeatTimes, 
    separator: options.separator || '+',
    addition: (typeof options.addition == 'undefined')? '': options.addition, 
    additionRepeatTimes: (options.additionRepeatTimes == null || typeof options.additionRepeatTimes == 'undefined')? 1:options.additionRepeatTimes, 
    additionSeparator: options.additionSeparator || '|',  
  };



  //optionsObj = this.options;

    for (let i = 1; i <= optionsObj.repeatTimes; i++) {
    if (optionsObj.additionRepeatTimes != null || typeof optionsObj.additionRepeatTimes != 'undefined') {
          for (let n = 1; n <= optionsObj.additionRepeatTimes; n++){
        if(n == optionsObj.additionRepeatTimes) {
          res += str.toString() + optionsObj.addition.toString();          
        } else{
          res += str.toString() + optionsObj.addition.toString() + optionsObj.additionSeparator;
        }
      }
      res += optionsObj.separator;
    } else {
    	res += str.toString() + optionsObj.separator
    } 
    }

    return res.slice(0,-optionsObj.separator.length) || res;
};
  