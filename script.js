let weather ={
    "apikey" : "088118c6a46025b32ba764abc4e9489f",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey
        ).then((response)=>response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather : function(data){
        const{name}= data ;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        console.log(name,icon,description,temp,humidity);
        document.querySelector(".city").innerText= name;
        document.querySelector(".pic").src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".Weather").innerText= description;
        document.querySelector(".temprature").innerText= temp + "°C";
        document.querySelector(".humidity").innerText= "humidity :" + humidity;
    },
    search : function(){
        this.fetchWeather(document.querySelector(".placeInput").value);    
    },
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search()
});

