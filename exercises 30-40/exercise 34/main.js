let list = document.querySelector(".list");

function additem(){
    let newitem = document.createElement("li");
    newitem.textContent ="new item";

    list.appendChild(newitem);
}

function removeitem(){
    if(list.lastChild){
        list.removeChild(list.lastChild);
    }else{
        alert("waa lagu kala baxay elementiyadii wll")
    }
}