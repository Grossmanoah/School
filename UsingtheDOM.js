-------------------------------------------Create and insert elements
Create an li element using the .createElement() method and save it in a variable called newDestination.

On the following line, assign the element an id of 'oaxaca' by using the id property on newDestination.

Lastly, assign the element the text 'Oaxaca, Mexico' by using the .innerHTML property on newDestination.



Hint
First, declare a variable that holds a new li element:

let yourVariableName = document.createElement('li');
Next, set the id:

yourVariableName.id = 'Name of id goes here';
Lastly, add text using the .innerHTML property:

yourVariableName.innerHTML = 'The list element text goes here';


Append the new element you created as the last child of the list with the ID more-destinations.

Scroll to the bottom of the page in the browser to see your new element.

Use the .getElementById() method to target the element with the id, more-destinations.

Append the new element you created as the last child of the list using .appendChild():

document.getElementById('more-destinations').appendChild(yourVariableNam


END RESULT:


let newDestination = document.createElement('li');

newDestination.id = 'oaxaca';

newDestination.innerHTML = 'Oaxaca, Mexico';

document.getElementById('more-destinations').appendChild(newDestination);



--------------------------------------------------------------------Remove an Element

Select the element with the ID oaxaca and save it to a variable.
Select its parent, assigned an ID of more-destinations.
Remove the element using the .removeChild() method and passing in the variable containing the oaxaca element.
Checkpoint 2 Passed

Hint
let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);




END RESULT

const parent = document.querySelector("#more-destinations");

const child = document.querySelector("#oaxaca");

parent.removeChild(child);




-------------------------------------------------------Interactivity with onclick

Modify the body of the turnButtonRed() function so that it modifies the button as follows:

Assigns the .style.backgroundColor to 'red'
Assigns the style.color to 'white'
Modifies the .innerHTML to 'Red Button'
Checkpoint 2 Passed
2.
Add interactivity to the button element by adding a function that turns its .backgroundColor to 'red' and its font color to 'white' when the button is clicked.

Checkpoint 3 Passed

Hint
let element = document.getElementById('interact');
element.onclick = function() { element.style.backgGround = 'red' };


END RESULT

let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed;


-----------------------------------------------------------Interactivity traversing the dom

1.
Access the .firstChild of the body and save it to a variable named first. Then modify first‘s .innerHTML to:

'I am the child!'
Take a moment to note which element has now been modified.

Checkpoint 2 Passed

Hint
To access the body of the page, you have to use document.body. After that, define the variable first and assign it the .firstChild of document.body. Assign the .innerHTML property of first to 'I am the child!'.

When done correctly you should see the first header text changed to: I am the child!

2.
Use the .parentNode property to access the parent element of the variable first and modify its .innerHTML to:

'I am the parent and my inner HTML has been replaced!'
Take a moment to notice the change in the web page.

Checkpoint 3 Passed

Hint
Chain .innerHTML to first.parentNode to access the HTML. Then use = to assign the correct string as its value.


--------------------------------------------------------------Event handler 

1.
Look at the browser and notice that there are two elements, one containing informational text about JavaScript and a button. When the button is clicked, there should be more text that appears. Currently, clicking the button doesn’t seem to do anything. You are going to create an event handler to fix this!

First, create a function called showInfo() which we will use as the event handler function to make the hidden element containing the additional informational text (moreInfo) appear when the 'click' event fires.

Inside the function, create a statement that changes the .display style property of the moreInfo element to 'block'.


Hint
Change the CSS property of the moreInfo element from a display of none to block. To change a CSS property in JavaScript, you must use the following syntax:
element.style.property = 'value';
Remember the property value must be in quotations!

2.
Now, create an event handler for a click event using .addEventListener(). Use readMore as the event target and showInfo as the event handler function.

Run your code and fire your event once you’re done.

Checkpoint 3 Passed

Hint
This event handler will be a named function, and the syntax for that is:

eventTarget.addEventListener('event', eventHandlerFunction);



END RESULT

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo(){
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click', showInfo);
