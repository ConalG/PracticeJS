// Create function to find hours slept per day
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day){
      case "monday":
      return 8
      case "tuesday":
      return 7
      case "wenesday":
      return 6
      case "thursday":
      return 8
      case "friday":
      return 7
      case "saturday":
      return 6
      case "sunday":
      return 9
    }
  }
  //Test function
  //console.log(getSleepHours("Sunday"));
  
  //Create function to get actual sleep hours
  const getActualSleepHours = () => getSleepHours("Sunday") + getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wenesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") ;
  //Test Function
  //console.log(getActualSleepHours());
  
  // Create Function to get Ideal sleep hours
  const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours * 7;
  }
  //Test Function
  //console.log(getIdealSleepHours());
  
  //create function to calculate sleep debt
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      return `You are getting the ideal ammount of sleep. Amount of sleep = ${actualSleepHours} hours`;
    }
    else if(actualSleepHours > idealSleepHours){
      return `You are getting more then the ideal amount of sleep. Amount of sleep = ${actualSleepHours} hours`;
    }
    else{
      return `You are getting too little sleep. Amount of sleep = ${actualSleepHours} hours`;
    }
  }
  console.log(calculateSleepDebt());