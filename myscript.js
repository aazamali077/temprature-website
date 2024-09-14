const APIKey = "6d4d0f7825c76202c40bacdc9000c5b7";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

        async function CheckWeather(city){
            const response = await fetch(APIURL+ city + `&appid=${APIKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }


            else{
                var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "icons/clouds.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "icons/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "icons/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "icons/mist.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "icons/clear.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
        }
        
        searchbtn.addEventListener("click", ()=>{
            CheckWeather(searchbox.value);
        })
        document.addEventListener("keypress", function(event){
            if (event.key === "Enter") {
                CheckWeather(searchbox.value);
            }
        });