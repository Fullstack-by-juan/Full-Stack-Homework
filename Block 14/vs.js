//create script that acepts a string of lowercase letters
// state vowels using a array
//declare vowels = 0  (important!)
//declare consonants = 0 (important!)
//create a loop that check for vowels and consonants
//JS should print out # of vowels and consonants


const countVowelsConsonants = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelsCount= 0;
    let consonantsCount= 0;

    for(let i =0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            vowelsCount++
        } else {
            consonantsCount++
        }
    } 
    return `${str} has ${consonantsCount} consonants and ${vowelsCount} vowels`;
}

let returnString = countVowelsConsonants("hello");
console.log(returnString);

let returnString2 = countVowelsConsonants("ukelele");
console.log(returnString2);

let returnString3 = countVowelsConsonants("awesome");
console.log(returnString3);

let returnString4 = countVowelsConsonants("onomonopia");
console.log(returnString4);

let returnString5 = countVowelsConsonants("textbook");
console.log(returnString5);



