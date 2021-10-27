function sym(...args) {
let result = SD(args[0],args[1]);
for(let i = 2; i<args.length;i++){
  result = SD(result,args[i]);
}
return result.sort().filter((item,i) => result[i+1]!=result[i]);
}
function SD(args1,args2) {
  let result = [];
  result = args1.filter(item => args2.indexOf(item)==-1);
  result = result.concat(args2.filter(item => args1.indexOf(item)==-1));
  return result;
}

console.log(sym([1, 2,2,2, 5], [ 3, 5], [3, 4, 5]));
