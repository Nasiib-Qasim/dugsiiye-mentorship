

function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve({id:2112,name:"nasiib"})
            }else{
                resolve("user data fetch is failed")
            }
        },2000)
    })
}


async function displayData(){
    try{
        let data = await getUserData();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
displayData();