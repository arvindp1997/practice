class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }

}


const mycar = new Car("Ford");

console.log(mycar);
mycar.present();

class Model extends Car {
    constructor(name,mod) {
        super(name);
        this.model = mod;
    }

   show() {
       return this.present() + ', it is a ' + this.model
   }

}
const newcar = new Model("ford","mustang");
newcar.show();

hello = function() {
    return "Hello World";
}

hello = () => {
    return " hello world";
}

hello = () => "hello world";

hello = (val) => "hello" + val;

hello = val => "hello " + val;

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
console.log(myList);

//deestructuring

const vehicles = ['mustang', 'f-150', 'expedition'];

    // old way
  //  const car = vehicles[0];
 //   const truck = vehicles[1];
  //  const suv = vehicles[2];

const [car,truck,suv] =vechicles;

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one,two,rest);