function range(...numbers){
  let array = []
  if(numbers[2]){
    for(let i = numbers[0]; i >= numbers[1]; i--){
      array.push(i);
    }
  }else {
      for(let i = numbers[0]; i <= numbers[1]; i++){
        array.push(i);
    }
  }
  return array;
}

function sum(array){
  sum = 0;
  for(let number of array){
    sum += number;
  }
  return sum;
}
