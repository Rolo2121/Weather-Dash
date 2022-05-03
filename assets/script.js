function getInfo(){
    var newName= document.getElementById("cityName");
    var cityName= document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value+"--"
}

fetch("http://api.openweathermap.org/geo/1.0/direct?q='+newName.value+',{state%20code},{country%20code}&limit={limit}&appid=e2f18eaf2bd74a4fcccaa89f72674078")
.then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)).innerHTML ="currentTemp:" +Number(data...)
    }
})

function defaultScreen(){
    document.getElementById("cityInput").defaultValue ="Kansas City";
    getInfo();
}
var d =new Date();
d.setDate(d.getDate() + 5);

function checkDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDate()-7;
    }else{
        return day +d.getDay(;)
    }
}

for(i=0;i<5;i++){
    document.getElementById("day" +(i+1)).innerHTML = weekday[checkDay(1)];
}