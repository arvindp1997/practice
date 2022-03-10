const posts = [
    {title : 'Post One', body: 'This is post one',LastEditedAt:(new Date())},
    {title : 'Post two', body: 'This is post two',LastEditedAt:(new Date())}
];

function getPosts() {
    setTimeout(() =>{
         let output = '';

         posts.forEach((post,index) =>{ 
             output+=`<li>${post.title}</li>`;   
             output+=`<li>${post.body}</li>`; 
             output+=`Lat edited at <li>${post.LastEditedAt}</li>`;
             output+=`Lat edited in secs ago <li>${Number(new Date() - post.LastEditedAt)/1000}</li>`;
         });
         document.body.innerHTML =output;

    },1000);
}

function createPost(post) {
   
   return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        posts.push(post);
      
        const error = false;

        if(!error){
            resolve();
        } else {
            reject('Error: Something went wrong');
        }


     },200);
   });
}

function deletePost() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.pop();
          
            const error = false;
    
            if(!error){
                resolve();
            } else {
                reject('Error: array is empty');
            }
    
    
         },1000);
    })
}

createPost({ title: 'Post Three', body: 'This is post three'})
  .then(getPosts)
  .catch(err => console.log(err));

  deletePost()
  .then(getPosts)
  .catch(err => console.log(err));
