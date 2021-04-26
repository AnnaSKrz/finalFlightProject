const placesIdArr = ['KRK-sky','LOND-sky','NYCA-sky'];
const placesName = ['Krakow','London','New York']
let place;
let arrivalPlace;


function getPlaceName(){
    const leavingPlaceValue = document.getElementById('leavingfligth');
    const arrivalPlaceValue = document.getElementById('arrival');
    let index = placesIdArr.indexOf(leavingPlaceValue.value);
    place = placesName[index];
    let arrivalIndex = placesIdArr.indexOf(arrivalPlaceValue.value);
    arrivalPlace = placesName[arrivalIndex];
}

class Place {
    constructor(place,divId){
        this.place = place;
        this.divId = divId;
    }
    setWeather(){
        const weatherImg = document.createElement('img');
        if(this.place == 'clear sky'){
            weather = 'czyste niebo';
            weatherImg.src = 'https://pngimg.com/uploads/sun/sun_PNG13449.png';
        } else if(this.place == 'broken clouds' || this.place == 'overcast clouds' || this.place == 'scattered clouds' || this.place == 'few clouds'){
            weather = 'pochmurno';
            weatherImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYexv8zMSx3z3aWgiU4ZYInV78tQEkQqImw&usqp=CAU';
        } else if(this.place == 'light rain'){
            weather = 'lekki deszcz';
            weatherImg.src = 'https://www.pngitem.com/pimgs/m/180-1808516_cloud-with-rain-png-transparent-png.png';
        } else{
            weather = this.place;
        }
        this.divId.innerHTML = weather;          
        this.divId.appendChild(weatherImg);
}
}
function showWeather(){
    getPlaceName();
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=06701f49dac9a46b72d3f6c19b15bcaa`)
        .then( (resp) => resp.json())    
        .then((function(data) { 
            let temp = data.list[0].main.feels_like - 272.15;
            let leavingWeatherDesc = data.list[0].weather[0].description;
            document.getElementById('temp').innerHTML = `${temp.toFixed()}st. Celcjusza`;
            const divId = document.getElementById('weather');
            const leavingPlace = new Place(leavingWeatherDesc,divId);
            leavingPlace.setWeather();         
    }))
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${arrivalPlace}&appid=06701f49dac9a46b72d3f6c19b15bcaa`)
    .then((res) => res.json())
    .then((function(data){
        let arrivalTemp = data.list[0].main.feels_like - 272.15;
        let arrivalWeatherDesc = data.list[0].weather[0].description;
        document.getElementById('arrivalTemp').innerHTML = `${arrivalTemp.toFixed()}st. Celcjusza`;
        const divId = document.getElementById('arrivalweather');
        const arrivalPlace = new Place(arrivalWeatherDesc,divId);
        arrivalPlace.setWeather();

    }))
}
module.exports = {
    showWeather
}