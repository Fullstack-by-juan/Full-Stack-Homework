//Create code to modifies a copy of an array of numbers
//return the array with only the odd numbers
//declare arrays
//declare Variables
//Log each variable
//print out result

let Input1 = [2, 4, 6, 8, 11, 20, 15, 22];
let Input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Input3 = [70, 42, 55, 81, 21, 91, 34];
let Input4 = [2, 4, 6, 8, 10, 11, 12 ];

const odds1  = Input1.filter((num) => num % 2 === 1 );
const odds2  = Input2.filter((num) => num % 2 === 1 );
const odds3  = Input3.filter((num) => num % 2 === 1 );
const odds4  = Input4.filter((num) => num % 2 === 1 );

console.log(odds1);
console.log(odds2);
console.log(odds3);
console.log(odds4);



