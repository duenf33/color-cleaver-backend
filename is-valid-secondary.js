/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(validSecInput1){
const validSecond1 = 'orange';
const validSecond2 = 'purple';
const validSecond3 = 'green';

  if(validSecond1 == validSecInput1) {
    return 'red', 'yellow';
  }
  if(validSecond2 == validSecInput1) {
    return 'red', 'blue';
  }
  if(validSecond3 == validSecInput1) {
    return 'yellow', 'blue';
  }
  else {
    console.log('Invalid Color');
  }
}
// isValidSecondary('good');
// isValidSecondary;


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
