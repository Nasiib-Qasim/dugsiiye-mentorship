let selectColor = document.querySelector("#selectColor");
let colorPreveiw = document.querySelector(".colorPreveiw");
let listColor = document.querySelector("#colors");
let clearhistory = document.querySelector("#clearhistory");
let text = document.querySelector("#text");


selectColor.addEventListener("change",SetSelectColor);

clearhistory.addEventListener("click",function(){
    colorPreveiw.style.backgroundColor ="";
    text.style.color = "black";
    listColor.textContent = "";
})

function SetSelectColor(){
    let color = selectColor.value;
    let background_Colorpreveiw = colorPreveiw.style.backgroundColor = color;
    if(background_Colorpreveiw === "#ffffff"){
        colorHistory(background_Colorpreveiw);
        text.style.color = "black";
        return
    }else if(background_Colorpreveiw === "#000000"){
        text.style.color = "white";
        colorHistory(background_Colorpreveiw);
        return
    }else{
        text.style.color = "white";
        colorHistory(background_Colorpreveiw);
    }

}
function colorHistory(color){
    let newcolor = document.createElement("li");
    newcolor.textContent =color;
    newcolor.style.color = color;
    newcolor.style.fontSize = "20px";
    listColor.appendChild(newcolor);
    listColor.style.listStyle = "none";
    listColor.style.padding = "0";
}