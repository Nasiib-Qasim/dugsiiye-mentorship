
let image = document.querySelector("img");

function changeimage(){
    let urlImage = prompt("enter your url image ");
    image.setAttribute("src",urlImage);
    image.style.border ="2px solid black";
    image.style.padding ="10px";
    image.style.borderRadius= "10px";
}