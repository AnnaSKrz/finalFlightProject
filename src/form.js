function showPeople(){
    const passengersform = document.getElementById('passengers-form');
    if (passengersform.classList.contains('displaynone')){
        passengersform.classList.remove('displaynone');
        passengersform.classList.add('display');
        document.getElementById('passengers-form').scrollIntoView(false);
    }
    else{
        passengersform.classList.add('displaynone');
    }
}

module.exports = {
    showPeople
}