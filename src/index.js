module.exports = function reverse (n) {
  let nString = String(n);
  let nArray = nString.split('');
  if (n < 0){
    nArray.shift();
  }
  let result = '';
  for (number of nArray){
    result = number + result;
  }
  return Number(result);
}
