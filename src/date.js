const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



 function showMinutes() {
    if(minutes <= 9){
        return minutes = `0${minutes}`;
    } else{
        return minutes = minutes;
    }
}

function currentDate(){
    const currentDate = new Date();
    let minutes = currentDate.getMinutes();
    if(minutes <= 9){
         minutes = `0${minutes}`;
    } else{
         minutes = minutes;
    }
    document.getElementById('currentDate').innerHTML = `  ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    document.getElementById('currentHour').innerHTML = `${currentDate.getHours()}:${minutes}`;
}
module.exports = {
    currentDate
}