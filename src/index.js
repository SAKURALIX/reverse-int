module.exports = function reverse (n) {
    let num = n
  
    let absoluteNumber = Math.abs(num); 
  
    numberToString = String(absoluteNumber);
  
    let stringToArray = numberToString.split('');
  
    let reverseArray = stringToArray.reverse();
  
    let arrayToString = reverseArray.join('');
  
    let stringToNumber = Number(arrayToString);
  
    return stringToNumber
  }
