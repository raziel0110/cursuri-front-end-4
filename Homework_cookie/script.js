const urlAdress = 'https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json';

const getCookie = ()=>{
    const cookieItem = {};
    const cookiesString = document.cookie;
    const separeteEntries = cookiesString.split(';');
    separeteEntries.forEach((entry)=>{
        const trimmed = entry.trim();
        const splitEntry = trimmed.split('=');
        cookieItem[splitEntry[0]] = splitEntry[1];
    });

    return cookieItem;
}
const getInfo = ()=>{
    fetch(
        urlAdress,{
        method : 'GET'
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
        //document.cookie = "temp=temp_c";
        const city = document.getElementById('city');
        const temperature = document.getElementById('temperature');
        city.innerHTML = data.current_observation.observation_location.city;
        const obj = data.current_observation;
        const tempCelsius = data.current_observation.temp_c;
        const tempFerenheit = data.current_observation.temp_f;
        const img = document.getElementById('img');
        img.setAttribute('src',data.current_observation.icon_url)
      
        
        
        
        
        const cookies = getCookie();
        const userCity = cookies.temp;
      console.log(data.current_observation[userCity]);
        if(userCity){
            document.querySelector(`[value = ${userCity}]`).setAttribute('checked',true);
          if(userCity === 'temp_c'){
            temperature.innerHTML = data.current_observation.temp_c + " Grade Celsius";
          } else {
            temperature.innerHTML = data.current_observation.temp_f + " Grade Ferenheit";
          }
        }   
        const radioBtns = document.querySelectorAll('input[type=radio]');
        radioBtns.forEach((btn) => {
            btn.addEventListener('change', (e) => {
            const newTemp = e.target.value; // en-US
            document.cookie = `temp=${newTemp}`;
            temperature.innerHTML = data.current_observation[newTemp];
            if(newTemp === 'temp_c'){
              temperature.innerHTML = data.current_observation[newTemp] + " Grade Celsius";
            } else {
              temperature.innerHTML = data.current_observation[newTemp] + " Grade Ferenheit";
            }
              //console.log(data.current_observation[newTemp]);
            
            
            
          
            });
        });

    });
}

//console.log(document.cookie);

window.onload = ()=>{
    getInfo();
    
}