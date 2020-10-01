const isValidSecondary = require("./is-valid-secondary");
/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(PrimaryInput1){

  const validPrim1 = 'red';
  const validPrim2 = 'yellow';
  const validPrim3 = 'blue';

  if(validPrim1 == PrimaryInput1) {
    return true;
  }
  if(validPrim2 == PrimaryInput1) {
    return true;
  }
  if(validPrim3 == PrimaryInput1) {
    return true;
  }
  else {
    return false;
  }
}



// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
