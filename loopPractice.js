let input = `turpentine and turtles`;
const vowels = [`a`, `e`, `i`, `o` , `u`];
const resultArray = [];
 
// create for loop to compare input with vowels
for(let i = 0; i < input.length; i++){
  //console.log(`i is `+ i) Test loop
  for(let j = 0; j < vowels.length; j++){
    //console.log(j) Test loop
    if( input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
    if(input[i] === `e`){
    resultArray.push(input[i])
    }
    if(input[i] === `u`){
      resultArray.push(input[i])
    }
}

// Log resultArray, join and set as caps
console.log(resultArray.join(``).toUpperCase());