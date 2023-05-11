//freelancers data
const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];


//add an h1 element and append the HTML document.
const tittle1 = () => {
    const root = document.getElementById('root');
    const header1 = document.createElement('h1');
    //Style your site using CSS.
    header1.setAttribute('class', 'tittle');
    //Append those elements to your HTML document.
    root.appendChild(header1);
    //give it text of "FREELANCERS"
    header1.textContent = 'FREELANCERS';
}
//function call
tittle1();


//create an unordered list element.
const unordedLi = () => {
    const list = document.getElementById('root');
    const newList = document.createElement('ul');
     //Style your site using CSS.
    newList.setAttribute('class', 'user-list');
    //Append those elements to your HTML document.
    list.appendChild(newList);

//Loop through the users array creating li elements. 
    for (let element of users) {
        const newUsersList = document.createElement('li');
        //Style your site using CSS.
        newUsersList.setAttribute('class', 'user-list-item');
        //Append those elements to your HTML document.
        newList.appendChild(newUsersList);
        newUsersList.innerHTML = `Name: ${element.name}, Age: ${element.age}, Occupation: ${element.occupation}.`;
    }
}
//function call
unordedLi();