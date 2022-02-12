

var arr = [1,2,3,4.5]

for(let i=0;i<arr.length;i++)
arr[i]=arr[i]*arr[i];

console.log(arr);


var obj = {num:2};

var addToThis = function(a,b,c){
    return this.num + a + b + c;
};

console.log(addToThis.call(obj,1,2,3));
 // functionname.call(obj, function arguments)
var arr =[1,2,3];
console.log(addToThis.apply(obj,arr));

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));

//summary

var obj = {num :2};

var functionName = function(arg1,arg2,arg3){

};

functionName.call(obj,arg1,arg2,arg3);

functionName.apply(obj[arg1,arg2,arg3]);

var bound = functionName.bind(obj);
bound(arg1,arg2,arg3);

var Student = {age:20};

var printage = function (){
    return this.age;
};

var bound1=printage.bind(Student);

bound1();

//CURRYING

let multiply = function(x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);