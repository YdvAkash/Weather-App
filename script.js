
const apikey ="d32b3d405a270aadb1e3b856613cc4fd";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");

async   function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();
    
    
    console.log(data)

  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
  document.querySelector(".wind").innerHTML= data.wind.speed + " Km/H ";

}
searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})