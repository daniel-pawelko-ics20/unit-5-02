// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"


// Defining function that actives when user presses "Check" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const number = parseInt(document.getElementById("number-entered").value)

  // If number is negative
  if (number < 0){
    document.getElementById('output').innerHTML = number + " is a negative number"
  }
  
  // If number is positive
  if (number > 0){
    document.getElementById('output').innerHTML = number + " is a positive number"
  }

  // If number is 0
  if (number === 0){
    document.getElementById('output').innerHTML = number + " is neither positive nor negative"
  }
}