//.. GLOBAL SCOPE


const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky())




//This is calling a funtion in the scope realm
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves)
}
logVisibleLightWaves()
// this last one will cause an error. It was called outside the function{this is inside a function}
console.log(lightWaves)




//This is another version of the above variable
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
//this will call a second name of the stars, overriding the first(North Star)
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(callMyNightSky());
//since this is outside the function. this next one will call the name of the stars again = Sirius
console.log(stars)









// The scope of `random` is too loose 

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3)
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
 let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {;
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {;
  console.log(`${name} time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
const name = 'Nala'

logEvent(name, event);
logTime(name, days);
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
