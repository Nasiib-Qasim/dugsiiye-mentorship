
let image = document.querySelector("img");

function changeimage(){
    let urlImage = prompt("enter your url image ");
    let border = prompt("enter your border color")
    let borderRadius = prompt("enter your border raduis")
    let width = prompt("enter your width")
    let heigth = prompt("enter your heigth")
    image.setAttribute("src",urlImage);
    image.style.border =`2px solid ${border}`;
    image.style.padding ="10px";
    image.style.borderRadius= borderRadius;
    image.style.width = width;
    image.style.height = heigth;
    image.style.backgroundColor = "green";
}