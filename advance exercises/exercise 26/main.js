
function getData(callback){
    let user = {name:"nasiib",age:24};
    callback(user);
}

console.log("start fetching data synchronous");

getData(function(user){
    console.log(user);
});





console.log("start fetching data asynchronous" );
function getDataAsyn(callback){
    setTimeout(function(){
        let user = {name:"nasiib",age:24};
        callback(user)
    },3000);
}

getDataAsyn(function(user){
    console.log(user)
})