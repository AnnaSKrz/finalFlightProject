//zmienne dotyczące miejsc wylotu/przylotu
const leavingPlaceValue = document.getElementById('leavingfligth');
const destinationPlaceValue = document.getElementById('arrival');
let placeLeavingName = 'wybierz lotnisko';
let placeDestinationName = 'wybierz lotnisko';
const idPlaces = ['LOND-sky','KRK-sky','NYCA-sky','WAW-sky'];
const namePlaces = ['Londyn','Kraków','Nowy Jork','Warszawa'];
//zmienne dotyczące dat
const leavingDateObject = document.getElementById('leavingdate');
const arrivalDateObject = document.getElementById('arrivaldate');

// zmienne dot. walut
let currancy = 'PLN';
// zmienne dotyczące osób
const peopleQuantity = ['1 Dorosłych','','',];
const increaseCounters = document.getElementsByClassName('increase');
const decreaseCounters = document.getElementsByClassName('decrease');

let flight = document.createElement('h4');
class Places {
    constructor(item){
        this.item = item;
        this.value = item.value;
    }
        findPlaceName() {
            if(idPlaces.indexOf(this.value)>=0)     {
                index = idPlaces.indexOf(this.value);
                return placeName = namePlaces[index];
            }   else{
                return placeName = 'wybierz lotnisko';
            }                                   
        }
}
let leavingPlace  = new Places(leavingPlaceValue); 
let destinationPlace = new Places(destinationPlaceValue);
class ChosenDates {
    constructor(item){
        this.item = item;
        this.value = item.value;
    }
    showDate(){
        if (this.item.value === ""){
            return this.item.value = 'wybierz datę';
        } else{
            return this.item.value;
        }
    }
}
//licznik osób
for(item of increaseCounters ){
    item.addEventListener('click',function increase(e){  
        let adults, adultsValue, children, childrenValue,babies, babiesValue = 0;   
        let idValue = e.target.id.split("-")[0];
        let quantity = document.getElementById(idValue+'-quantity');
        quantity.value++; 
            if(quantity.id == 'adults-quantity') {
                adults = 'Dorosłych'; 
                adultsValue = quantity.value;
                peopleQuantity.fill(`${adultsValue} ${adults}`, 0,1);
            } 
            if(quantity.id == 'children-quantity') {
                children = 'Dzieci'; 
                childrenValue = quantity.value;
                peopleQuantity.fill(`, ${childrenValue} ${children} `,1,2);
            }
            if(quantity.id == 'baby-quantity') {
                babies = 'Niemowląt'; 
                babiesValue = quantity.value;
                peopleQuantity.fill(`, ${babiesValue} ${babies}`,2);
        } 
        //  console.log(peopleQuantity.join(' '));
         document.getElementById('people-chosen').value = peopleQuantity.join(' ');
        });
    }

for(item of decreaseCounters ){
    item.addEventListener('click',function decrease(e){  
        let adults, adultsValue, children, childrenValue,babies, babiesValue = 0;   
        let idValue = e.target.id.split("-")[0];
        let quantity = document.getElementById(idValue+'-quantity');
        // console.log(quantity.value);
            if(quantity.value <= 0){
                quantity.value = 0;
            } else{
                quantity.value--;
            }
            if(quantity.id == 'adults-quantity') {
                adults = 'Dorosłych'; 
                adultsValue = quantity.value;
                peopleQuantity.fill(`${adultsValue} ${adults}`, 0,1);
            } 
            if(quantity.id == 'children-quantity') {
                children = 'Dzieci'; 
                childrenValue = quantity.value;
                peopleQuantity.fill(`, ${childrenValue} ${children} `,1,2);
            }
            if(quantity.id == 'baby-quantity') {
                babies = 'Niemowląt'; 
                babiesValue = quantity.value;
                peopleQuantity.fill(`, ${babiesValue} ${babies}`,2);
            } 
        document.getElementById('people-chosen').value = peopleQuantity.join(' ');
            });
}    
function summary(){
    //#regiondata    
    const leaveFlightInfo = document.createElement('span');   
    document.getElementById('regiondata').innerHTML = " ";
    leaveFlightInfo.innerText = (`${placeLeavingName}`)
    const arivalFlightInfo = document.createElement('span');            ;
    arivalFlightInfo.innerText = (`${placeDestinationName}`);
    const flightimg = document.createElement('img')
    flightimg.src = 'arrows.png'; 
    flightimg.classList.add('arrows');   
    document.getElementById('regiondata').appendChild(leaveFlightInfo);
    document.getElementById('regiondata').appendChild(flightimg);
    document.getElementById('regiondata').appendChild(arivalFlightInfo);    
    document.getElementById('leaving-title').innerText = (`${placeLeavingName} -> ${placeDestinationName}`);
    document.getElementById('arrival-title').innerText = (`${placeDestinationName} -> ${placeLeavingName}`);
}
//#output text
function outputText(){   
    let leavingDateChosen = new ChosenDates(leavingDateObject);
    let arrivalDateChosen = new ChosenDates(arrivalDateObject);
    let leavingDateChosenValue = leavingDateChosen.showDate();
    let arrivalDateChosenValue = arrivalDateChosen.showDate()
    flight.innerText = (`Z: ${placeLeavingName}  *  Do: ${placeDestinationName}  *  Wylot: ${leavingDateChosenValue}  *  Przylot:  ${arrivalDateChosenValue}  *  Ilośc osób: ${peopleQuantity.join(' ')}`);
    document.getElementById('output').appendChild(flight); 
    peopleQuantityJoin = peopleQuantity.join(' ');
    placeLeavingName = placeLeavingName;
    summary();    
}
outputText();
//formularz
function postData() { 
    document.getElementById('passengers-form').classList.add('displaynone');    
    document.getElementById('output').innerText=""; 
    leavingPlace  = new Places(leavingPlaceValue); 
    destinationPlace = new Places(destinationPlaceValue);       
    placeLeavingName = leavingPlace.findPlaceName(); 
    placeDestinationName = destinationPlace.findPlaceName();     
    outputText();     
    document.getElementById('searchbutton').scrollIntoView(false);          
};


module.exports = {
    postData
}
