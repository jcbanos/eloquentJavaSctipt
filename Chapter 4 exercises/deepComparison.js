// Your code here.

function deepEqual(object1, object2){
  if(object1 === object2){
    return true;
  } else if(object1 == null || object2 == null){
    return object1 === object2;
  } else if(typeof(object1) == "object" || typeof(object2) == "object"){
    object1Properties = Object.keys(object1);
    object2Properties = Object.keys(object2);
    for(let property of object1Properties){
      comparison = deepEqual(object1[property], object2[property])
      if(comparison == false){
        return false;
      }
    }
    return true;
  } else{
    return false;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
