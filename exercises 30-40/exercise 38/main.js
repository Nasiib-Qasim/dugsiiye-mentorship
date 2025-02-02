let navbar = document.querySelector(".navbar");

let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
})