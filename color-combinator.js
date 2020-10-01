/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator(comboInput1, comboInput2) {

  const validPrim1 = 'red';
  const validPrim2 = 'yellow';
  const validPrim3 = 'blue';

  if((validPrim1 == comboInput1) && (validPrim2 == comboInput2)) {
    return 'orange';
  }
  if((validPrim1 == comboInput1) && (validPrim3 == comboInput2)) {
    return 'purple';
  }
  if((validPrim3 == comboIput1) && (validPrim2 == comboInput2)) {
    return 'green';
  }
}



// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
