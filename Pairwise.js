function pairwise(arr, arg) {
  let indices = [];
  for(let i =0; i<arr.length; i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]==arg-arr[i]&&indices.indexOf(i)==-1&&indices.indexOf(j)==-1){
        indices.push(i);
        indices.push(j);
        break;
      }
    }
  }
  let sum = 0;
  for(let i=0;i<indices.length;i++){
    sum += indices[i];
  }
  return sum;
}

console.log(pairwise([1, 1, 1], 2));
