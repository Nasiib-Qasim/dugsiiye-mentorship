

async function fetchdata(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error(`http request error status ${response.status}`)
        }
        let data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

fetchdata();