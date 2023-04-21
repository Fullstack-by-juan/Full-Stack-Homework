//create a loop to iretate from 1 to 100
//loop shpuld check each number if is mutiple of 3, 5 || both.
//if multipe 3 print Fizz
//if multipe 5 print buzz
//if mutiple of 3 && 5 print FizzBuzz
//if not print out number.


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

