
function getDataUserFetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve({id:"1223",name:"ali"});
            }else{
                reject("failed user data fetch");
            }
        },2000)
    })
}


getDataUserFetch().then((data)=> console.log("user data", data))
    .catch((error)=> console.log(error));