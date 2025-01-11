// Ex1 :  Write a function that takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways

// use for :

// function raisingPower(input){
//     let output = [];
//     for(i=0;i<input.length;i++){
//         output.push(2**input[i]);
//     }
//     return output;
// }

// console.log(raisingPower([1,2,3]));


//use forEach :

// function raisingPower(input){
//     let output = [];
//     input.forEach(element => {
//         output.push(2**element);
//     });
//     return output;
// }

// console.log(raisingPower([1,2,3]));


//use Map :

// function raisingPower(input){
//     let output =input.map(element => {
//     return  2**element;
//     });
//     return output;
// }

// console.log(raisingPower([1,2,3]));


// Ex2: Write a function that takes an array of numbers as input, uses map to return a
// new array where each element is either the string "even" or the string "odd", based on
// each value.
// If any element in the array is not a number, the resulting array should have the string
// "N/A" in its place.
// For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].


function checkValue(input){
    let output =input.map(element => {
        if(element % 2 === 0 && typeof(element)=== "number"){
            return "even";
        }else if(element % 2 !== 0 && typeof(element)=== "number"){
            return "odd"
        }else{
            return "N/A"
        }
    });
    return output;
}

console.log(checkValue([1,2,3,"Ali",8,"ahmad"]));


// Ex3: Use forEach to Return all the names in the array [“Rawan", "Wesam", "Hind",
//     "Muhammad", "Esraa", “Dareen”] using loops.


// let arrayNames = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// let result = [];
// arrayNames.forEach((name)=>{
//     result.push(name);
// });
// console.log(result);


// EX4: Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several
// rules:
//  - If a number is divisible by 3, add the word "Fizz" to the output array.
//  - If the number is divisible by 5, add the word "Buzz" to the output array.
//  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output
// array.
//  - Otherwise, add the number to the output array.
// Return the resulting output array

function fizzbuzz(number){
    let result = number.map((value)=>{
        if(value % 3 == 0 && value % 5 == 0){
            return "Fizz Buzz";
        }
        if(value % 3 == 0){
            return "Fizz";
        }
        if(value % 5 == 0){
            return "Buzz";
        }
        
    })
    return result;
}

console.log(fizzbuzz([3,9,20,15,45]));

    



