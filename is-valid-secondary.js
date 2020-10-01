/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(validSecInput1){

  const validSecond1 = 'orange';
  const validSecond2 = 'purple';
  const validSecond3 = 'green';

  if(validSecond1 == validSecInput1) {
    return true;
  }
  if(validSecond2 == validSecInput1) {
    return true;
  }
  if(validSecond3 == validSecInput1) {
    return true;
  }
  else {
    return false;
  }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
