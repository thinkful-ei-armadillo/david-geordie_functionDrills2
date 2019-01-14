'use strict';

function jediName (firstName, lastName) {
  result = [];
  for (let i = 0; i < 3; i++){
    result.push(lastName[i]);
  } 
    for (let i = 0; i < 2; i++){
    result.push(firstName[i]);
  }
    let final = result.join('');
  return final;
}

function beyond(num){
  if (typeof num !== 'number' || num === undefined){
    console.log('Please enter a number');
  } else if (isFinite(num) === false){
    console.log('and beyond!');
  } else if (num > 0){
    console.log('to infinity!');
  } else if (num < 0){
    console.log('to negative infinity!');
  } else if (num === 0){
    console.log('staying home');
  }
}

function decode(message) {
    let letters = [];
    let message_array = message.split(' ');
    for (let i = 0; i < message_array.length; i++) {
        if (message_array[i][0] === 'a') {
            letters.push(message_array[i][1]);
        }
        else if (message_array[i][0] === 'b') {
            letters.push(message_array[i][2]);
        }
        else if (message_array[i][0] === 'c') {
            letters.push(message_array[i][3]);
        }
        else if (message_array[i][0] === 'd') {
            letters.push(message_array[i][4]);
        }
        else {
            letters.push(' ');
        }
    }
    let result = letters.join('');
    console.log(result);
}

function getDays(month, leapYear) {
    let result;
    if(month === 'February' && leapYear === true){
      result = "February has 29 days";
      console.log(result)
      return result;
    } else {
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days!`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            result = `${month} has 30 days!`;
            break;
        case 'February':
            result = "February has 28 days!";
          break;
        default: 
            result = "Please enter a valid month!"
    }   
    }
    
    console.log(result);
    return result;
}

function playRps(playerChoice){
    if (playerChoice !== 1 && playerChoice !== 2 && playerChoice !== 3){
        throw new Error('Please enter 1, 2, or 3')
    } else {
        const randomNo = Math.floor(Math.random() * 3) + 1;
        if (playerChoice === 1){

        }
    }
}