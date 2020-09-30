const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = null) {
  if(date === null) return 'Unable to determine the time of year!';
  //if(date !== new Date(date)) return 'Error';
  let month = date.getMonth();
  switch (month){
    case 12:
    case 0:
    case 1:
      return 'winter'
      break;
      case 2:
      case 3:
      case 4:
        return 'spring'
        break;
        case 5:
        case 6:
        case 7:
          return 'summer'
          break;
        case 8:
        case 9:
        case 10:
          return 'autumn'
          break;        
  }
};
