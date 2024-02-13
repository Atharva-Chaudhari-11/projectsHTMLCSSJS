const API_Key='b3d47336e6a7cd76a0ae2ac3907c1931';
const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// window.addEventListener('load',()=> weatherPrediction('Pune'));



const searchInput=document.querySelector('.search-bar input');
const searchBtn=document.querySelector('.search-bar button'); 

async function weatherPrediction(cities){
    const res=await fetch(`${url}${cities}&appid=${API_Key}`);
    if(res.status==404){
        document.querySelector('.mega-container').style.display="none";
        document.querySelector('.error').style.display="block";
    }else{
        let data=await res.json();
        console.log(data);
        const temp=document.getElementById('temp');
        const city=document.getElementById('city')
        const humidity=document.querySelector('.hum-temp');
        const windSpeed=document.querySelector('.wind-speed');
        const weather=document.getElementById('image');
        
        temp.innerHTML=data.main.temp;
        humidity.innerHTML=data.main.humidity;
        windSpeed.innerHTML=data.wind.speed;
        city.innerHTML=data.name;
    
        if(data.weather[0].main=='Clouds'){
            weather.src='images/clouds.png';
        }else if(data.weather[0].main=='Rain'){
            weather.src='images/rain.png';
        }else if(data.weather[0].main=='Clear'){
            weather.src='images/clear.png';
        }else if(data.weather[0].main=='Drizzle'){
            weather.src='images/drizzle.png';
        }else if(data.weather[0].main=='Mist'){
            weather.src='images/mist.png';
        }else{
            weather.src='images/snow.png';
         }
    document.querySelector('.mega-container').style.display="block";
    document.querySelector('.error').style.display="none";

    }
}


searchBtn.addEventListener('click',()=>{
    const city = searchInput.value;
    weatherPrediction(city); 

})
