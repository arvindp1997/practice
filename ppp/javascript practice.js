let txt='my name is aravind';

console.log(txt.length);

let part=txt.slice(-10,-2);
console.log(part);

let str="abcdef";

for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        let part=str.substring(i,j);
        console.log(part);
    }
}

let txt1='please visit odisha and odisha!';
let newtxt1=txt1.replace('odisha','shimla');
console.log(txt1,newtxt1);

let ans=txt1.split(" ");
console.log(ans);
