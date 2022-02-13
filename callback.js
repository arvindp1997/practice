//what is a callback function of javascript

setTimeout(function () {
    console.log("timer")
},5000)
function x(y){
console.log("x");
y();
}
x(function y(){
console.log("y");
})
// Javascript is a synchronous and single threaded language

//Blocking the main thread

//Power of Callbacks

// Deep about Event Listeners

//Closure demo with event Listeners

//Scope Demo with Event Listeners

//Garbage Collection & removeEventListeners