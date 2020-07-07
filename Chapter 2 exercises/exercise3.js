let size = 8;

for(let i = 0; i < size; i ++){
  if(i % 2 == 0){
    let str = "";
    for(let j = 0; j < size; j ++){
      if(j % 2 == 0){
        str += " ";
      } else {
        str += "#";
      }
     }
    console.log(str);
  } else {
    let str = "";
    for(let j = 0; j < size; j ++){
      if(j % 2 == 0){
        str += "#";
      } else {
        str += " ";
      }
     }
    console.log(str);
  }
}
