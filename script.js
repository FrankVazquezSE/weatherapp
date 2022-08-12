let weather ={
    "apiKey": "3d1095ef7306e2da91ea49fc068a75c1" ,
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = temp + "°F"
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".humidity").innerText = "Wind Speed" + speed + " mp/h";
    },
    search: function () {
        document.querySelector(".search-bar").value;
    }
};

document.querySelector(".searchbutton")
.addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function () {
    if(event.key == "Enter") {
        weather.search();
    }
})