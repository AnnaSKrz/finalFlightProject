const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

function currentDate(){
    const currentDate = new Date();
    let minutes = currentDate.getMinutes();
    if(minutes <= 9){
         minutes = `0${minutes}`;
    } else{
         minutes = minutes;
    }
    document.getElementById('currentDate').innerHTML = `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    document.getElementById('currentHour').innerHTML = `${currentDate.getHours()}:${minutes}`;
}
module.exports = {
    currentDate
}