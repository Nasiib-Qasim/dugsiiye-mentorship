
function operate(a,b,callback){
    return callback(a,b);
}

function add(a,b){
    console.log(a-b);
}

function substraction(a,b){
    console.log(a-b)
}
function multiply(a,b){
    console.log(a*b)
}
function division(a,b){
    console.log(a/b)
}
operate(10,20,add);
operate(10,30,substraction);
operate(10,20,multiply);
operate(20,4,division);
