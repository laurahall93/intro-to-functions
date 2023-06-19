function isEqual(numOne, numTwo) {
  if (numOne === numTwo) {
    return true;
  } else return false;
}

//test case
console.log(isEqual(4, 4), "should be True");
console.log(isEqual(0, 0), "should be True");
console.log(isEqual(-4, -4), "should be True");
console.log(isEqual(4, -4), "should be False");
console.log(isEqual(0, 1), "should be False");
