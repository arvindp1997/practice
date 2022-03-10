'use strict';
//house

this.table = 'window table';

const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};




this.garage = {
    table : 'garage table',
    
};

let johnRoom = {
    table: 'johns table',
    
};



cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnRoom,'some soap');
//design pattern

class Student {
    constructor(name, age, phoneno, marks) {
        this.name = name,
            this.age = age,
            this.PhoneNo = phoneno,
            this.marks = marks;
    }
}

function CheckEligible(student){
    if(student.marks > 40)
    console.log('eligible');
    else
    console.log('not eligible');
}

const Student1= new Student('aravind','24','42424242424',76);
const Student2= new Student('ashish','22','424254545424',33);
const Student3= new Student('ravi','21','42456562424',76);
const Student4= new Student('kinshu','20','424787842424',76);
const Student5= new Student('abhishek','25','424242323424',76);

CheckEligible(Student1);
CheckEligible(Student2);

let EligibleforPlacements = (student) =>{ if(student.marks > 60) return true; else return false;}
 
// for loop not required - check for individual students
for(let i=1;i<=5;i++)
{ const stu=`Student${i}`;
console.log(stu);
console.log(EligibleforPlacements(stu));
    if(EligibleforPlacements(stu) )
    console.log(stu.name);
    else
    console.log('not eligible for placement');
}
                                             