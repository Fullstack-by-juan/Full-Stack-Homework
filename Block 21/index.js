//Create file index.js


//constructor function called Car
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//Add a method using propotype
Car.prototype.getDescription = function () {
    return "the car is a " + this.make + " "  + this.model + " " + "from " + this.year + ".";
}

//create a new object with property "make", "model, "year"
const newCar = new Car("Subaru", "Impreza", 2021);
console.log(newCar.getDescription());


function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
}
//electric car prototype 
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype = ElectricCar;
ElectricCar.prototype.getDescription = function(){
    return "the electric car is a " + this.make + " " + this.model + " " + "from " + this.year + "with a range of " + this.range + " miles" + " ." ;
}
const electricOpstions = new ElectricCar("Tesla", "Model S", 2023, 600);
console.log(ElectricCar.getDescription());





