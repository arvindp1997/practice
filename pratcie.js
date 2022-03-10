let object = [{ name : 'abhirup',age:20},{ name : 'guru',age:21},{ name : 'Rambabu',age:22}]


let ans=[];

for(let i=0;i<object.length;i++)
if(object[i].age >=21)
ans.push(object[i]);

console.log(ans);


const ans = `answer is ${var}`;

const arr1=[1,2,3]
const arr2 =[3,4,5]

const arr3 = [...arr1,...arr2];


const x={ name : 'abhirup',age:20};

let y=x;

y.name='aravind';

console.log(x,y);

function dummy(){

    let aa=x;
    x.name='test';

}


dummy();
console.log(x,y);

const arr=[1,22,5,3,2,8,22,1,10,11];


vector<int> RemoveDuplicate(vector<int>&num){

    set<int>ss;

    for(int i=0;i<nums.size();i++)
    ss.insert(nums[i]);


    vector<int>ans;

    for(auto x:ss )
    ans.push_back(x);

    return ans;

}


function (string str){

    if(str.length ==0)return 0;
    return 1;


}


const obj = { name : 'abhirup',age:20}

	//obj.name = 'guru'

    obj1={...obj};
    obj1.name='dada';

    console.log(obj,obj1);
