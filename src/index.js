import {showMenu} from "./menu";
import style from "./css/index.scss";
import Logo from "./assets/img/logo2.png";
import{showPeople} from "./form";
;import{postData} from "./postData";
import{showLeavingData} from "./showLeavingData";
import {showArrivalData} from './showArrivalData';
import {seatChoise} from './seatChoise';
import { showEndingWindow } from './ending'
import { currentDate } from './date';
import { showWeather } from './weatherAPI';
import { loginAlert, errorAlert, placeAlert,chooseRightDate,earlierDate } from './alerts';

//logo
let logo = new Image();
logo.src = Logo;
const closeButtons=[document.getElementById('closebutton'),document.getElementById('close')];
const place = document.getElementsByTagName('select');
const leavingDate = document.getElementById('leavingdate');
const arrivalDate = document.getElementById('arrivaldate');

const leavingPlaceValue = document.getElementById('leavingfligth');
const destinationPlaceValue = document.getElementById('arrival');

currentDate();
document.getElementById("logo").appendChild(logo);

//menu small screens
document.getElementById('menu').addEventListener('click', showMenu);
//wybór ilości osób
document.getElementById('people-chosen').addEventListener('click', showPeople);
//zatwierdzenie danych w formularzu
document.getElementById('ready').addEventListener('click',postData);
document.getElementById('fillReady').addEventListener('click',function(){
    const currentDate = new Date();
    const leavingInfo = new Date(leavingDate.value);
    const arrivalInfo = new Date(arrivalDate.value);
    const oneDay = new Date(1970,0,2);
    const currentDayMinusOneDay =  currentDate.getTime() - oneDay.getTime()

    if(arrivalInfo.getTime()<currentDayMinusOneDay || leavingInfo.getTime()<currentDayMinusOneDay){
        chooseRightDate();

    } else if(arrivalInfo.getTime()<leavingInfo.getTime()){
        earlierDate();

    } else if(place[0].value == ''|| place[1].value == '' || leavingDate.value == '' || arrivalDate.value == ''){
        errorAlert();
    } else if(leavingPlaceValue.value == destinationPlaceValue.value){
        placeAlert();
    }
    else{
        postData();
        document.getElementById('searchbutton').value = "Wyszukaj";
    }
});
//zamknięcie okna logowania
closeButtons.forEach(item => {
    item.addEventListener('click',() =>{
        document.getElementById('myPopup').classList.remove('show');
    }
)});
//logowanie
document.getElementById('searchbutton').addEventListener('click',function(e){
    if(e.target.value == "Wyszukaj"){
        loginAlert();
       
    } else {
        errorAlert();
    }
})
//wyświetlenie wyników wyszukiwania
document.getElementById('loginBtn').addEventListener('click', showFlights);
function showFlights(){
    const nicknameInner = document.getElementById('nickname');
    const passwordInner = document.getElementById('password');
   
    fetch(`https://my-json-server.typicode.com/AnnaSKrz/users/db`)
        .then((response) => response.json())
        .then(function(data)  {
           data.users.forEach(item => {
                if(nicknameInner.value == item.nickname && passwordInner.value == item.password){
                    showWeather();
                    showLeavingData();
                    showArrivalData();
                    document.getElementById('myPopup').classList.remove('show');
                    document.getElementById('result').scrollIntoView(true);
                    document.getElementById('user').innerHTML = `${item.name},`;
                } else {
                    document.getElementById('alert').innerHTML = "Błędny login lub hasło";
                    
                }
            });

        })
        .catch((err)=>{
            console.log(err);
        })
    }
//wyświetlenie podsumowania
document.getElementById('flightBooking').addEventListener('click',function(){
    const leaveFlightSeat = document.getElementsByClassName('leaveFlightBooking')[0];
    const arrivalFlightSeat = document.getElementsByClassName('arrivalFlightBooking')[0];
    if(leaveFlightSeat.textContent !== 'Wybierz miejsce' && arrivalFlightSeat.textContent !== 'Wybierz miejsce'){
        showEndingWindow();
    } else {
        document.getElementById('alertText').innerHTML="";
        const alertText = document.createElement('p');
        alertText.innerHTML = "W celu dokonania rezerwacji, wybierz miejsce w samolocie";
        alertText.style.color = "red";
        alertText.style.fontSize = "1.6rem";
        document.getElementById('alertText').appendChild(alertText);
    }
});
//wybór miejsca
document.getElementById('leaveFlightBooking').addEventListener('click',seatChoise);
document.getElementById('arrivalFlightBooking').addEventListener('click',seatChoise);

// function flightNumber(){
//     const flightNr = (Math.floor(Math.random()*6000)+1000);
//     console.log(flightNr);
// }
// flightNumber();