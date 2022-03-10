

function sortedFormula(s){
 
    let num;
    
   num= s.match(/\d+/g);
   
   num.sort();
   //console.log(num);
   let ans='';

   for(let i=0;i<num.length;i++)
   if(i!=num.length-1)
   ans+=num[i]+'+';
   else
   ans+=num[i];

   //console.log(ans);
  return ans;
}

//sortedFormula("1+2+1+3+1");



function goodIndices(s){
  let cnt=0;
    for(let i=0;i<s.length;i++){
           
       
        for(let j=i+1;j<=s.length;j++){
               
            let result = s.substr(i, j);
           // console.log(result);

            if(result.length>=4 && result.includes("bear") == true)
            {cnt++; 
             console.log(i , j);
             }


        }
    }

    return cnt;


}


//goodIndices("bearbtear");