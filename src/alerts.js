
const place = document.getElementsByTagName('select');
const leavingDate = document.getElementById('leavingdate');
const arrivalDate = document.getElementById('arrivaldate');

function loginAlert() {
    if(place[0].value == ''|| place[1].value == '' || leavingDate.value == '' || arrivalDate.value == ''){
        errorAlert();

    } else{
        const popup = document.getElementById("myPopup");
        popup.classList.add("show");
        
        document.getElementById('login').scrollIntoView();
        
    }
}

function errorAlert(){
    document.getElementById('alertPopup').classList.add("show");
    document.getElementById('closeBox').addEventListener('click',closeWindow);
    document.getElementById('login').scrollIntoView();
}

function placeAlert(){
    document.getElementById('alertPopup').classList.add("show");
    document.getElementById('alerth2').innerHTML = "Miejsce wylotu i przylotu muszą być różne";
    document.getElementById('closeBox').addEventListener('click',closeWindow);
    document.getElementById('login').scrollIntoView();
}

function closeWindow(){
    document.getElementById('alertPopup').classList.remove("show");
}
function chooseRightDate(){
    document.getElementById('alertPopup').classList.add("show");
    document.getElementById('alerth2').innerHTML = "Wybierz prawidłową datę";
    document.getElementById('closeBox').addEventListener('click',closeWindow);
    document.getElementById('login').scrollIntoView();

}
function earlierDate(){
    document.getElementById('alertPopup').classList.add("show");
        document.getElementById('alerth2').innerHTML = "Data powrotu nie może być wcześniejsza niż data wylotu";
        document.getElementById('closeBox').addEventListener('click',closeWindow);
        document.getElementById('login').scrollIntoView();
}
module.exports = {
    loginAlert,
    errorAlert,
    placeAlert,
    chooseRightDate,
    earlierDate
}