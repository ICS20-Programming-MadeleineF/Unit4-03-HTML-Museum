//
// Created by: Madeleine Forgeron
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = "Please make a selection above."
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

    	// if age is less then 5 or more the 95 it is free
	if (age < 5 || age > 95) {
		cost = "It is free."
	}
      	// if age equal or more then 12 or more or equal the 21 or it os tuesday or frienday then you get a student discount
	else if ((day == "Tuesday") || (day == "Thursday")
			 (age >=12) && (age <=21)) {
		cost = "You get a student discount."
	}
      	// else you have to pay the regular price
	else if ((age > 0) || (day != "")) {		
		cost = "You have to pay regular price."
	}
	
  	// display the results
  	document.getElementById('display-results').innerHTML = cost
}