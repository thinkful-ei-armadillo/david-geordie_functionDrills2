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
    console.log(final);
};