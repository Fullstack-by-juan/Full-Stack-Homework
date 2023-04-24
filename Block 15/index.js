
let customer = {
    fisrtname: "jake",
    lastName: "smith",
    email: "jaeksmih!aol.com",
    phone: undefined,
    zipCode: undefined,
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
};

console.log('Fisrt Input', customer);

customer.email = "Jak3Smith1992@email.com";
customer.phone = 3195551234;
customer.zipCode = "63132";
customer.favoriteFlavors = "coffee," + " strawberry," + " matcha";


console.log('Editing mistakes', customer);

delete customer.zipCode;
delete customer.favoriteStore;

console.log('removing properties', customer);


customer.toppings = "chocolate sprinkles," + " wafer straws," + " gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchasecost = 5.32;

console.log('managment change', customer);


const survey = [customer];

console.log('survey array', survey);



