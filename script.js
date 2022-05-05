
function plusMinus(arr) {
    let count = [0,0,0];
    let [count1, count2, count3] = count;
    let length = arr.length;

  
  for(let i of arr){
      if(i>0){
          count1++
      } else if(i<0){
          count2++
      } else if(i===0){
          count3++
      }      
  }
  console.log(`${(count1/length).toFixed(6)}\n ${(count2/length).toFixed(6)}\n ${(count3/length).toFixed(6)}`);
}

plusMinus([-4,3,-9,0,4,1]);
