module.exports = function getSeason(date) {
  let season = '';
  let month = '';

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.keys(date).length > 0) {
    throw new Error();
  }else {
    month = date.getMonth().toString()
  }

  switch(month) {
    case '11':
    case '0':
    case '1':
      season = 'winter';
      break;
    case '2':
    case '3':
    case '4':
      season = 'spring';
      break;
    case '5':
    case '6':
    case '7':
      season += 'summer';
      break;
    case '8':
    case '9':
    case '10':
      season += 'autumn';
      break;
    default:
      return 'Unable to determine the time of year!'
  };

  return season;

}

