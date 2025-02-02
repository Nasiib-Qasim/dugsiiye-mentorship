let formTranslator = document.querySelector("#form-translator");

formTranslator.addEventListener("submit", async function(event){
    event.preventDefault();
   let languages_chose_from= document.querySelector("#selected-from-Language").value;
   let languages_choose_to = document.querySelector("#selected-to-Language").value;
   let text_translate = document.querySelector("#text-translate").value;


   const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${languages_choose_to}&from=${languages_chose_from}&textType=plain`;
   const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'ac6e60766bmshd41c1a85dc2dfd0p1de5c4jsncb18fa3ea5cb',
		'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body:  JSON.stringify([{ text: text_translate }]) 
};
try {
	const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
	const result = await response.json();
    document.querySelector("#result-tranltator").textContent = result[0].translations[0].text;
    console.log(result[0].translations[0].text);
} catch (error) {
	console.error(error);
}

})

document.addEventListener("DOMContentLoaded", async function () {
    const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ac6e60766bmshd41c1a85dc2dfd0p1de5c4jsncb18fa3ea5cb',
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com'
        }
    };
    try{

        let response = await fetch(url,options);
        let result = await response.json();
        // console.log(result.translation);
        displayInputTo(result.translation);
        displayInputFrom(result.translation);
    }catch(error){
        console.error(error);
    }
})


function displayInputTo(languages){
    
    for(let key in languages ){
        let languages_from_options = document.createElement("option");
        languages_from_options.className = "languages_from";
        languages_from_options.value = key;
        languages_from_options.textContent = languages[key].name;
        document.querySelector("#selected-from-Language").appendChild(languages_from_options);
    }
}




function displayInputFrom(languages){
    for(let key in languages ){
        let languages_to_options = document.createElement("option");
        languages_to_options.className = "languages_to";
        languages_to_options.value = key;
        languages_to_options.textContent = languages[key].name;
        document.querySelector("#selected-to-Language").appendChild(languages_to_options);
    }
}


