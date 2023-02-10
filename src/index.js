module.exports = function reverse (n) {
    n = String(n);
    let stringToArray = n.split('');
  
    let reverseArray = stringToArray.reverse();
  
    let arrayToString = reverseArray.join();

    let stringToNumber = Number(arrayToString);

    let absoluteNumber = Math.abs(stringToNumber);
  
    return absoluteNumber
  }
