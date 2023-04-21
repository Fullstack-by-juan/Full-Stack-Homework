
//create a loop 
//loop should print out array in reverse order
//log result

const inverseArray = (arry) => {
    const reversedArray = [];
    for(let i = arry.length -1; i >= 0; i--) {
        reversedArray.push(arry[i]);
    }

    return reversedArray;
}

console.log(inverseArray([1, 2, 3]));
console.log(inverseArray([1, 3, 5, 7, 9, 11]));
console.log(inverseArray([20, 50, 30, 60, 200]));
console.log(inverseArray([1, -1, 2, -3, 5, -8, 13]));

