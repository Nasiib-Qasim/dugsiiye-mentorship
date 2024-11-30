
// array methods 

// let students = [20,20,29,90];

// foreach array method 
// students.forEach(function(list){
//     console.log(list)
// })

// map array method 
// let newarray =students.map(function(list){
//     return list * 2
// })

// console.log(newarray)

// reduce array method 
// let result = students.reduce(function(total,num){
//     return total + num ;
// },0)

// console.log(result)
// filter array method 
// let filters = students.filter(function(grade){
//     return grade >= 30;
// })

// console.log(filters)



// destructuring array 

// let student = ['nasiib','qaasim','yaxye'];


// let [nasiib,qasim,yaxye]= student;

// console.log(nasiib);
// console.log(qasim);
// console.log(yaxye);


// let students = [
//     {
//         name: 'nasiib',
//         age: 20,
//         class:"block B 2"
//     },
//     {
//         name: 'yaxye',
//         age: 24,
//         class:"block c1"
//     }
// ]
 
// let [studentone,studenttwo] = students;

// console.log(studentone);
// console.log(studenttwo);


            // destructuring of object 

// let person = {name:"nasiib",age:122,facult:"ict"};

// let {name,age,facult} = person;

// console.log(name);
// console.log(age);
// console.log(facult);


// default parameters 

// function student(name ="university"){
//     console.log(`welcome to ${name}`)
// }

// student();
// student("nasiib");


// spread operetor 
// let numbers = [1,2,3,4,5];

// let newNumber = [...numbers ,10,20,30,40];

// console.log(newNumber);

// let newarray = newNumber.filter((less)=> less >30);

// console.log(newarray);

// newNumber.forEach(function(sum){
//     console.log(sum)
// })





// rest operator 

// function sum(...number){
//     console.log( number.reduce((total,sum)=> total +sum,0));
//     let newNumber = number.filter((greater)=>{
//         return greater;
//     })
//     console.log(newNumber)
// }

//  sum(20,30,40,50);



// spread opereter 

// let student = {
//     name:"nasiib",
//     age:20,
//     gender:"male"
// }

// let newStudents = {
//     ...student,
//     facult:"ict",
//     course:"javascript",
//     year:2022
// }

// console.log(newStudents);
// let newst = Object.assign(student,{facult:"ict"});
// let newtask = Object.assign({facult:"bbt"});
// console.log(newtask)


// synchronous or block 


// function greater(){
//     alert("hellow eng nasiib");
//     return {name:"nasiib",age:22};
// }
// console.log("start block code");
// console.log(greater());
// console.log("end block code")


// Asynchronous or non-blocking 

// function getdata(){
//     setTimeout(()=>{
//         console.log("data is ready");
//     },3000)
// }
// console.log("data is loading ")
// getdata();
// console.log("data search is end")

// another example 


// function getdata(stroredData){
//     setTimeout(function(){
//         let user = {username:"nasiib",password:1223};
//         stroredData(user)
//     },3000)
// }
// getdata(function(user){
//     console.log(user);
// })



// function getdata(callback){
//     setTimeout(()=>{
//         let user = {name:"nasiib",id:222};
//         callback(user);
//     },2000)
// }

// getdata((data)=>console.log(data));


// primises 


// function getdata(){

//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         let user = false;
//         if(user){
//             resolve({name:"nasiib",id:2222})
//         }else{
//             reject("user kaan waa qalad");
//         }

//     },2000)
//     })

// }

// getdata().then((data)=> console.log(data))
//     .catch((error)=> console.log(error));




// function getdata(){
    
//     return new Promise((correct,err)=>{
//         setTimeout(()=>{
//             let user = false;
//             if(user){
//                 correct({name:"nasiib",id:2222})
//             }else{
//                 err("user kaan waa qalad");
//             }
//         },2000)
//     })

// }

// getdata().then((data)=>console.log(data))
// .catch((error)=>console.log(error));


// async function displaydata(){
//     try{
//         let test = await getdata();
//         console.log(test)
//     }catch(err){
//         console.log(err)
//     }

// }

// displaydata();


// async function fetchdata(){
//     let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await responce.json();
//     console.log(data);
// }    

// fetchdata();



//  callback function 
// example one callback 


// function operate(a,b,callback){
//     return callback(a,b)
// };

// function add(a,c){
//     return a+c
// }
// console.log(operate(1,2,add));


// example two call back 

// let number = [12,10,20];

// number.forEach(listNumer);
// function listNumer(number){
// console.log(number)
// }


// example 3 call back

// function fetch(callback){
//     setTimeout(() => {
//         let data = {name:"nasiib",age:12};
//         callback(data)
//     },2000)
// };

// function displaydata(data){
//     console.log(data)
// }
// fetch(displaydata);

// example four callback

// function greate(name){
//     console.log(`hellow ${name}`)
// }

// // greate("nasiib");

// function userinput(callback){
//     let user = prompt("enter your nasme");
//     callback(user);
// }

// userinput(greate)



