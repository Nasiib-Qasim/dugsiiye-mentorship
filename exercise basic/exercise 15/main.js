
let students = [
    { name: 'John', age: 20 ,class:'120R' },
    {name:'nasiib',age:'30',class:'123R'},
    {name:'mohamed',age:25,class:'124R'},
]

console.log("properties and value of each students")
for(let student of students){
    for(let studentInfo in student){
        console.log(studentInfo + ":" + " " +student[studentInfo])

    }
    console.log("--------")
}


