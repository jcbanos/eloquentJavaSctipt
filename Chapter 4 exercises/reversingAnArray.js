// Your code here.

function reverseArray(array){
  new_array = []
  for(let i = 0; i < array.length; i++){
    new_array[i] = array[array.length -1 - i];
  }
  return new_array
}

function reverseArrayInPlace(array){
  new_array = []
  for(let i = 0; i < array.length; i++){
    new_array[i] = array[array.length -1 - i];
  }
  for(let i = 0; i < array.length; i++){
    array[i] = new_array[i]
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
