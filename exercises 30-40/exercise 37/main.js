let simpleForm = document.querySelector(".simpleForm");
let titleinput = document.querySelector("#title");
let imageUrlinput = document.querySelector("#imageUrl");
let deccription= document.querySelector("#content");
let listPost = document.querySelector("#listPost");



simpleForm.addEventListener("submit",createPost);

window.addEventListener("DOMContentLoaded",loadPostsFromLocal)

function loadPostsFromLocal(){

    let posts = getdataFromLocalStorage();
    posts.forEach(post => {
        addPostToDom(post)
    });
}

function createPost(e){
    e.preventDefault();
    let title = titleinput.value.trim();
    let imageurl = imageUrlinput.value.trim();
    let desc = deccription.value.trim();
    if(title !== ""  && desc !== ""){
        post = {
            id:Date.now(),
            title:title,
            url : imageurl,
            desc : desc
        }
       addPostToDom(post);
       titleinput.value = "";
       imageUrlinput.value = "";
       deccription.value = "";
       titleinput.focus();

       addPostTolocalStorage(post);
    }
}


function addPostToDom(post){
  let li = document.createElement("li");
  li.innerHTML = ` <h2 class="postTitle"> ${post.title} </h2>
                <image class="postImage" src="${post.url}"  height="300" >
                <p class="postDesc">${post.desc}</p>
                <button class="Edit-btn">Edit</button>
                <button class="delete-btn">delete</button>`
    listPost.appendChild(li);

  let deleteBtn = li.querySelector(".delete-btn");
  let EditBtn = li.querySelector(".Edit-btn");
  deleteBtn.addEventListener("click",function(){
        deletePost(post.id,li);
  })
  EditBtn.addEventListener("click",function(){
    EditPost(post.id,li);
  })
}


function addPostTolocalStorage(post){
    let oldPost = getdataFromLocalStorage();
    oldPost.push(post);
    localStorage.setItem("posts",JSON.stringify(oldPost));
}

function getdataFromLocalStorage(){
    let oldPost = JSON.parse(localStorage.getItem("posts")) || [];
    return oldPost;
}


function deletePost(postId ,li){
    let posts = getdataFromLocalStorage();
    let post = posts.filter(post => post.id !== postId);
    if(post){
        localStorage.setItem("posts",JSON.stringify(post));
        li.remove();
    }
}


function EditPost(postId ,li){
    let oldPosts  = getdataFromLocalStorage();
    // console.log(posts);
    let postTitle = li.querySelector(".postTitle");
    let postImage = li.querySelector(".postImage");
    let postDesc = li.querySelector(".postDesc");
    let newTitle = prompt("Enter New Title", postTitle.textContent);
    let newUrlImage= prompt("Enter New Title", postImage.src);
    let newDesc= prompt("Enter New Title", postDesc.textContent);
    let post  = oldPosts.find(post=>post.id == postId);
    if(newTitle !== "" && newTitle.trim() !==""  && newDesc !== "" && newDesc.trim() !==""){
        postTitle.textContent = newTitle;
        postImage.src = newUrlImage;
        postDesc.textContent = newDesc;


        post.title = newTitle;
        post.url = newUrlImage;
        post.desc = newDesc;
            
        localStorage.setItem("posts",JSON.stringify(oldPosts));
    }
   
}