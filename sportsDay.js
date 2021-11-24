// Declaring Variables
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = false;
let runnerAge = 18;

// check if runner is an adult and early
if (earlyRunner === true && runnerAge > 18){
  raceNumber += 1000; 
}

// Check race time
if (earlyRunner === true && runnerAge > 18){
  console.log(`Race number: ${raceNumber}. Race Time: 9:30 am.`);
}
else if(earlyRunner !== true && runnerAge > 18) {
  console.log(`Race number: ${raceNumber}. Race Time: 11:00 am.`);
}
else if(runnerAge < 18){
  console.log(`Race number: ${raceNumber}. Race Time: 12:30 am.`)
}
else{
  console.log(`See registration desk!`);
}