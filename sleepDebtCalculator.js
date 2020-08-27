// how many hours user sleep due a day 
const getSleepHours = day => {
  day = day.toLowerCase();
  if(day === 'monday') {
    return 8;
  } else if(day === 'tuesday') {
    return 5;
  } else if(day === 'wednesday') {
    return 10;
  } else if(day === 'thursday') {
    return 6;
  } else if(day === 'friday') {
    return 4;
  } else if(day === 'saturday'){
    return 12;
  } else if(day === 'sunday') {
    return 3;
  } else {
    return 'Error';
  }
}
//how many hours user sleep total
const getActualSleepHours = () => 
getSleepHours('monday') + 
getSleepHours('tuesday') +  
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday'); 

//ideal sleeping hours
const getIdealSleepHours = () => {
  let idealHours = 8.5;
  return idealHours * 7;
}
//calculating slept debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealHours = getIdealSleepHours();
  if(actualSleepHours === idealHours){
    console.log('You got a perfect amount of sleep');
  } else if(actualSleepHours < idealHours) {
    console.log('You got ' + (idealHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    console.log('You got ' + (actualSleepHours - idealHours) + ' hour(s) more sleep than you needed this week. Get some rest.');
  }
}

calculateSleepDebt();

//console.log(getIdealSleepHours());
//console.log(getActualSleepHours());
