/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(validSecInput11){

  const validSecond1 = 'orange';
  const validSecond2 = 'purple';
  const validSecond3 = 'green';

  if(validSecond1 == validSecInput11) {
    return 'red and yellow';
  }
  if(validSecond2 == validSecInput11) {
    return 'red and blue';
  }
  if(validSecond3 == validSecInput11) {
    return 'blue and yellow';
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
