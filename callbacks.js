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

function createPost(post,callback) {
    setTimeout(() =>{
       posts.push(post);
       callback();
    },2000);
}


function create4thPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}
createPost({title: 'Post three',body:'this is post three',LastEditedAt:(new Date())},getPosts);
create4thPost({title:'Post four',body:'this is post four',LastEditedAt:(new Date())},createPost);


//lastedited in secs ago


setInterval(getPosts,1000);