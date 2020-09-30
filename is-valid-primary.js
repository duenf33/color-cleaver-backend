const isValidSecondary = require("./is-valid-secondary");

/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(PrimaryInput1, PrimaryInput2){
  isValidSecondary(validSecInput1)

  const validPrim1 = 'red';
  const validPrim2 = 'yellow';
  const validPrim3 = 'blue';



  if((validPrim1 == PrimaryInput1) && (validPrim2 == PrimaryInput2)) {
    return validSecond1;
  }
  if((validPrim1 == PrimaryInput1) && (validPrimary3 == PrimaryInput2)) {
    return validSecond2;
  }
  if((validPrim3 == PrimaryInput1) && (validPrim2 == PrimaryInput2)) {
    return validSecond3;
  }
  else {
    return 'Invalid Color';
  }
}
// isValidPrimary('red', 'blue');
// isValidPrimary;



// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
