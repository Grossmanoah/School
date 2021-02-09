---------------------------------------------------------------------------repeating tasks
// Write your code below
let vacationSpots= ['Greece', 'Italy', 'Spain'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);





--------------------------------------------------------------------------for loop

// Write your code below
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}



--------------------------------------------------------------------------Reverse loop
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}




---------------------------------------------------------------------------Looping through arrays



//This defines your arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
//This creates the loop that goes through the list. 0 starts the loops at the beginning word 'bali' i= is the iterate so i<vacationspots.length will read through the list.
 for (let i = 0; i < vacationSpots.length; i++) {
   //THis prints the function. remember i is what shows your list. the iterate of the array. That was it prints all of the list in a sentance starting with "'I would love to visit **PLACE ITERATED***"
   console.log('I would love to visit ' + vacationSpots[i])
 }


--------------------------------------------------------------------------------Nested loops

// List bobs followers
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin', 'jeanmonkey'];
//list tinas followers
let tinasFollowers = ['Cheese', 'Joe', 'Erin', 'jeanmonkey'];
//leaving mutual followers blank because it will be forulated in the nested array function
let mutualFollowers = []
//Sets bobs followers = to i
for (let i = 0; i < bobsFollowers.length; i++) {
  //Sets tinas to j
  for (let j = 0; j < tinasFollowers.length; j++) {
    //formulated the function for both
    if (bobsFollowers[i] === tinasFollowers[j]) {
      //creates the function that equals mutualFollowers
        mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
//prints only the mutuals for tina and bob. SOO rad
console.log(mutualFollowers);


---------------------------------------------------------------------------------- While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
while ( currentCard != 'spade') {
currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



------------------------------------------------------------------------------------Do while loop


// Write your code below
let cupsOfSugarNeeded = 12;
let cupsAdded = [0];
do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);





---------------------------------------------------------------------------------------Break keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Defines your list. . length prints all of it.
for (let i = 0; i < rapperArray.length; i++) {
  //Just shows all within the list of rappers
  console.log(rapperArray[i]);
  //compared the rapperArray to Notorious BIG, then breaks after so tupac is left out. So it disrupts the full list printing
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
