function solution(number){
    const numbers=[]
    var addition=0
    for(var i=1; i<number; i++)
    if ((i %3)==0 || (i%5)==0){
      numbers.push(i)
    }
  numbers.forEach(function(a){addition += a;});
    return addition
  }
  module.exports = solution;