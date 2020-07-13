// Your code here.

function arrayToList(array){
  list = null;
  previous_node = null;
  current_node = null;
  for(let i = 0; i < array.length; i++){
    if(i == 0) {
      current_node = {
        value: array[i],
        rest: null
      };
      list = current_node;
      previous_node = current_node;
    } else {
      current_node = {
        value: array[i],
        rest: null
      };
      previous_node.rest = current_node;
      previous_node = current_node;
    }
  }
  return list;
}

function listToArray(list){
  if(list.rest == null){
    return [list.value];
  } else {
    let rest = listToArray(list.rest);
    return [list.value].concat(rest);
  }
}

function prepend(element, list){
  return {
    value: element,
    rest: list
  };
}

function nth(list, number){
  if(number == 0){
    return list.value;
  } else if(list.rest == null){
    return undefined;
  } else {
    rest = nth(list.rest, number - 1);
    return rest;
  }
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
