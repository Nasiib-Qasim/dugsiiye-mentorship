
let number = [1,2,3];
let newNumber = [...number,4,5,6];
console.log(newNumber); 



function multiply(...number){
    return number.reduce((total,multi)=> total *multi,1);
}

console.log(multiply(2,3,5,10));