"use strict"

function jediName (firstName, lastName) {
    result = [];
    for (let i = 0; i < 3; i++){
        result.push(lastName[i])
    }; 
    for (let i = 0; i < 2; i++){
        result.push(firstName[i])
    };
    let final = result.join('');
    return final;
};

function beyond(num){
    if (typeof num !== 'number' || num === undefined){
        console.log('Please enter a number')
    } else if (isFinite(num) === false){
        console.log('and beyond!')
    } else if (num > 0){
        console.log('to infinity!')
    } else if (num < 0){
        console.log('to negative infinity!')
    } else if (num === 0){
        console.log('staying home')
    }
}