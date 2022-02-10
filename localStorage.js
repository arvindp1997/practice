const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');


localStorage.setItem('name',nameInput)
localStorage.setItem('email',emailInput)
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('email'))

localStorage.removeItem('name')
localStorage.removeItem('email')

sessionStorage.setItem('name','John')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

//storing users object in local storage
let myObj = {
 name : "aravind" ,
age : 24
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj",myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserialized);
