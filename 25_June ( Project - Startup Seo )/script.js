
function search(){
    let box = document.getElementById("details")
    let city = document.getElementById("search").value;
    let api_key = ""
    box.innerHTML = "";
    new Promise ((res,rej) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then((res) => res.json())
        .then(apiData => {
            box.innerHTML += `
                <span class="city">City Name:  ${apiData['name']}</span>
                <span class="temp">Temperture:  ${apiData.main.temp}</span>
                <span class="whe">Whether Condition:  ${apiData.weather[0].main}</span>
                <span class="Hum">Humidity:  ${apiData.main.humidity}</span>
                <span class="wind">Wind Speed:  ${apiData.wind.speed}</span>
                <div class="img">
                    <img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png" alt="Whether Icon">
                </div>
             `
        })
        .catch((e) => {
            // console.log("Error", e)
            box.innerHTML = `<span class="city_not">City Not Found</span>`
        })
       
    })
    
}
