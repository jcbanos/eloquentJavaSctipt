// Your code here.

function isEven(num){
  if(num < 0){
    num = -num
  }
  if(num === 0){
    return true;
  }
  else if(num === 1){
    return false;
  } else {
    rest = isEven(num - 2)
    return rest;
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
