//zmienne dotyczące miejsc wylotu/przylotu
const leavingPlaceValue = document.getElementById('leavingfligth');
const destinationPlaceValue = document.getElementById('arrival');
//zmienne dot. walut
let currancy = 'PLN';
//zmienne dotyczące dat
const leavingDateObject = document.getElementById('leavingdate');
const arrivalDateObject = document.getElementById('arrivaldate');
const month = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];
const weekday = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
const companyIdArr = [];
const companyNameArr = [];
const placeIdArr = [];
const placeNameArr = [];
const bookingArivalButton = [];

let leavingDateValue;
let price;
class Slides {    
    constructor(leavingDateValue){          
        this.leavingDateValue = leavingDateValue;
    }
    activeSlide() {        
        // console.log(this.leavingDateValue);                   
            let getMonth = month[this.leavingDateValue.getMonth()];
            const leavingDateText = document.createElement('h5');
            leavingDateText.innerText = (`${this.leavingDateValue.getDate()} ${getMonth}`);
            //Dzień w carousel    
            const leavingDay = document.createElement('h6');
            leavingDay.innerText = `${weekday[this.leavingDateValue.getUTCDay()]}`;            
            document.getElementById('arrivalActive').appendChild(leavingDateText);
            document.getElementById('arrivalActive').appendChild(leavingDay);    
            //Cena w carousel    
            const priceValue = document.createElement('h4');
            priceValue.innerText = (`${price} ${currancy}`);
            document.getElementById('arrivalActive').appendChild(priceValue);
            return;
    }   
}
class Flight {
    constructor(companyId,companyName,leaveInfo,timeleaveInfo,arrivalLeavingInfo,flightNumber,flightPrice, flightCurriency,index,arrivalDate){
        this.companyId = companyId;
        this.companyName = companyName;
        this.leaveInfo = leaveInfo;
        this.timeleaveInfo = timeleaveInfo;
        this.arrivalLeavingInfo = arrivalLeavingInfo;
        this.flightNumber = flightNumber;
        this.flightPrice = flightPrice;  
        this.flightCurriency = flightCurriency;  
        this.index = index; 
        this.arrivalDate = arrivalDate;
        let priceWithbaggage;  
        let baggageType;
    }
    timeRandom(){
        const minute = (Math.floor(Math.random()*50)+10);
        const hours = Math.floor(Math.random()*23 + 1 );
        return `${hours}.${minute}`;
    }
    setFlightNumber(){
        const flightNr = (Math.floor(Math.random()*6000)+1000);
        return flightNr;
    }
    showFlightData(){
        //tworzenie diva
        const flightinfoDiv =  document.createElement('div');
        const createFlightDiv = () => {
            return new Promise((res) => {
                flightinfoDiv.classList.add(`arrivalflight-info`); 
                flightinfoDiv.classList.add(`arrivalflight${this.index}`);
                document.getElementById('arrivalflight').appendChild(flightinfoDiv);
                res();
            })
        } 
        const companyInfoDiv = () =>{
            return new Promise((res) => {
                const arrivalCompanyInfo = document.createElement('div');
            arrivalCompanyInfo.classList.add('company-info');
            flightinfoDiv.appendChild(arrivalCompanyInfo);
            const arrivalCompanyImg = document.createElement('img');
            arrivalCompanyImg.src = 'lot.png';
            // arrivalCompanyInfo.appendChild(arrivalCompanyImg);
            arrivalCompanyInfo.insertAdjacentHTML("beforeend",`<h6>Obsługiwany przez <br><span id="arrivalCompanyName${this.index}"></span></h6>`);
            document.getElementById(`arrivalCompanyName${this.index}`).innerHTML = this.companyName;  
            res();
            })             
        }
        const leaveInfo = () => {
            return new Promise((res)=> {
                const leaveInfoDiv = document.createElement('div');
                leaveInfoDiv.classList.add('leave-info');
                flightinfoDiv.appendChild(leaveInfoDiv);
                const h6 = document.createElement('h6');
                h6.innerHTML = this.leaveInfo;
                const h4 = document.createElement('h4');
                h4.innerHTML = `${this.timeRandom()}`;
                leaveInfoDiv.appendChild(h4)
                leaveInfoDiv.appendChild(h6);  
                res();
            })            
        } 
        const timeLeaveInfo = () => {
            return new Promise((res) => {
                const timeArrivalInfoDiv = document.createElement('div');
                timeArrivalInfoDiv.classList.add('time-arrival-info');
                timeArrivalInfoDiv.classList.add(`arrivalFlightImg${this.index}`);
                flightinfoDiv.appendChild(timeArrivalInfoDiv);
                const timeFlightImg = document.createElement('div');
                timeFlightImg.classList.add('timeflight-img');
                document.getElementsByClassName(`arrivalFlightImg${this.index}`)[0].appendChild(timeFlightImg);
                const flightImg = document.createElement('img');
                flightImg.src = 'leave.png';
                timeFlightImg.appendChild(flightImg);
                timeArrivalInfoDiv.insertAdjacentHTML("beforeend",`<h5><span id="arrivalTimeDuration${this.index}"></span></h5>`);
                document.getElementById(`arrivalTimeDuration${this.index}`).innerHTML = this.timeleaveInfo;
                res();
            })            
        }
        const arrivalInfo = () => {
            return new Promise((res)=> {
                const arrivalInfoDiv = document.createElement('div');
                arrivalInfoDiv.classList.add('leave-info');
                flightinfoDiv.appendChild(arrivalInfoDiv);
                const h6 = document.createElement('h6');
                h6.innerHTML = this.arrivalLeavingInfo;
                const h4 = document.createElement('h4');
                h4.innerHTML = `${this.timeRandom()}`;
                arrivalInfoDiv.appendChild(h4)
                arrivalInfoDiv.appendChild(h6);
                res();
            })              
        }
        const flightNumberInfo = () => {
            return new Promise((res)=> {
                const flightNumberInfoDiv = document.createElement('div');
                flightNumberInfoDiv.classList.add('flight-number');            
                flightinfoDiv.appendChild(flightNumberInfoDiv);
                flightNumberInfoDiv.insertAdjacentHTML("beforeend",`<h6>Nr lotu</h6> <h5 id="arrivalFlightNr${this.index}">${this.setFlightNumber()}</h5>`);
                // document.getElementById(`arrivalFlightNr${this.index}`).innerHTML = `${this.flightNumber()}`;
                res();
            })            
        }
        const flightPriceInfo = () => {
            return new Promise((res)=> {
                const flightPriceDiv =  document.createElement('div');
                flightPriceDiv.classList.add('flight-price');            
                flightinfoDiv.appendChild(flightPriceDiv);
                flightPriceDiv.insertAdjacentHTML("beforeend",`<h5>Cena</h5> <h2 id="arrivalPriceValue${this.index}"> zł</h2>`);
                const flightPriceAndCurriency = this.flightPrice + this.flightCurriency;
                document.getElementById(`arrivalPriceValue${this.index}`).innerHTML = flightPriceAndCurriency;
                res();
            })
        }   
        const createButton = () => {
            return new Promise((res)=> {
                const button = document.createElement('input');
            button.classList.add('arrivalChoiseBtn');
            button.classList.add(`arrivalChoiseBtn${this.index}`);
            button.innerText = "Zarezerwuj";
            button.setAttribute("value","Wybierz");
            button.setAttribute("type","button");
            flightinfoDiv.appendChild(button);
            res(button);
            })
        }  
        const choosingFlight = (button) => {
            return new Promise((res)=> {
                button.addEventListener('click',(e) =>{  
                    chosenFlight = this;        
                            const chosenButtons = document.getElementsByClassName('arrivalchoosenBtn');
                            for(item of chosenButtons){
                                item.classList.remove('arrivalchoosenBtn');
                                item.setAttribute("value","Wybierz");
                                item.style.background = "#1b2549";
                            }                    
                            e.target.classList.add('arrivalchoosenBtn');
                            e.target.setAttribute("value","Wybrany");
                            e.target.style.background = "#be9c4b";
                            res(chosenFlight);
            })       
            });
        }  
        const createBaggageFlightDiv = () => {
            return new Promise((res) => {
                let baggageBoxDiv = document.createElement('div');
                baggageBoxDiv.classList.add(`arrivalFlightBaggagesBox`);
                baggageBoxDiv.classList.add(`arrivalFlightBaggagesBox${this.index}`);
                flightinfoDiv.appendChild(baggageBoxDiv);      
                baggageBoxDiv.insertAdjacentHTML("afterbegin",  
                `<div class="withoutBaggage">
                <div class="baggageInfo">
                <h2 class="arrivalBaggageValue${this.index} arrivalBaggage${this.index}">Value</h2>
                <h4>Podróż z małym bagażem podręcznym</h4>
                <ul>
                <li><h5><span>&rArr;</span>Tylko 1 mały bagaż podręczny</h5>
                <p>Musi zmieścić sie pod siedzeniem (40cx x 20cm x25 cm</p>
                </li>
                </ul>
                </div>
                <div class="baggageButton">
                <h4>${chosenFlight.flightPrice}zł</h4>
                <h6>za każdą osobę w ramach tego lotu</h6>
                <input value="Wybierz" type="button" id="arrivalBaggage${this.index}">
                </div>
                </div>
                <div class="smallBaggage">
                <div class="baggageInfo">
                <h2  class="arrivalBaggageRegular${this.index} arrivalSmallBaggage${this.index}">Regular</h2>
                <h4>Idealna opcja dla krótkich podróży</h4>
                <ul>
                <li>
                <h5><span>&rArr;</span>Pierwszeństwo wejścia i 2 sztuki bagażu podręcznego </h5>
                <p>Pierwszeństwo wejścia, bagaż kabinowy 10kg i mała torba podręczna</p>
                </li>
                <li>
                <h5><span>&rArr;</span>Zarezerwowane miejsce</h5>
                <p>Dostępne wybrane rzędy</p>
                </li>
                </ul>
                </div>
                <div class="baggageButton">
                <h4>plus 40,00 zł</h4>
                <h6>za każdą osobę w ramach tego lotu</h6>
                <input value="Wybierz" type="button" id="arrivalSmallBaggage${this.index}">
                </div>
                </div>
                <div class="bigBaggage">
                <div class="baggageInfo">
                <h2 class="arrivalBaggagePlus${this.index} arrivalBigBaggage${this.index}">Plus</h2>
                <h4>Obejmuje bagaż rejestrowany 20kg</h4>
                <ul>
                <li>
                <h5><span>&rArr;</span>1 mały bagaż</h5>
                <p>Musi zmieścić się pod siedzeniem (40cm x 20cm x 25cm)</p>
                </li>
                <li>
                <h5><span>&rArr;</span>Zarezerwowane miejsce</h5>
                <p>Dostępne wybrane rzędy</p>
                </li>
                <li>
                <h5><span>&rArr;</span>
                Bagaż rejestrowany 20kg
                </h5>
                <p>Nadanie torby w punkcie odprawy</p>
                </li>
                <li>
                <h5><span>&rArr;</span>Bezpłatna odprawa na lotnisku</h5>
                <p>Do 40minut przed lotem</p>
                </li>
                </ul>
                </div>
                <div class="baggageButton">
                <h4> plus 80,00 zł</h4>
                <h6>za każdą osobę w ramach tego lotu</h6>
                <input value="Wybierz" type="button" id="arrivalBigBaggage${this.index}">
                </div>
                </div>`)         
               
                res();
            })            
        }  
        const choosingBaggage = () => {
            document.getElementsByClassName(`arrivalFlightBaggagesBox${this.index}`)[0].scrollIntoView();
            let noneBaggage = document.getElementById(`arrivalBaggage${this.index}`);
            let smallBaggage = document.getElementById(`arrivalSmallBaggage${this.index}`);
            let bigBaggage = document.getElementById(`arrivalBigBaggage${this.index}`);
           buttonsBaggageArr = [noneBaggage,smallBaggage,bigBaggage];  
                         
       return new Promise((res) => { buttonsBaggageArr.forEach((item) => item.addEventListener('click',function(){
               let leaveFlightBaggagesBox = document.getElementsByClassName(`arrivalFlightBaggagesBox${chosenFlight.index}`)[0]; 
               const createNewFlightPrice= () => {
                   return new Promise((res) =>{
                       let flightPriceWithBaggege = 0; 
                       if(this.id == `arrivalBaggage${chosenFlight.index}`) {
                           flightPriceWithBaggege = chosenFlight.flightPrice;
                       } else if(this.id == `arrivalSmallBaggage${chosenFlight.index}`){
                           flightPriceWithBaggege = chosenFlight.flightPrice + 40;
                       } else if(this.id == `arrivalBigBaggage${chosenFlight.index}`){
                           flightPriceWithBaggege = chosenFlight.flightPrice + 80;
                       }
                       leaveFlightBaggagesBox.classList.add('hideBaggegeBox');
                       baggageType = document.getElementsByClassName(this.id)[0].textContent;
                       const boxes = document.getElementsByClassName(`arrivalFlightBaggagesBox`);
                          
                        document.getElementById('summary').style.display = "block";
                        document.getElementById('bookingArrivalFlightButtons').style.display="flex";
                        boxes[0].style.display = "none";
                        document.getElementById('summary').scrollIntoView();
                       res(flightPriceWithBaggege);
                   })
               } 
               const showNewFlightPrice = (flightPriceWithBaggege) => {
                   return new Promise((res) => {
                    chosenFlight.priceWithbaggage = flightPriceWithBaggege;
                    chosenFlight.baggageType = baggageType;
                       res();
                   })
               }
               const createSummaryFlightDiv = () => {
                return new Promise((res) => {
                    // console.log(chosenFlight);
                    let summaryFlightDiv = document.getElementsByClassName('summaryArrivalFlightBox')[0];
                    summaryFlightDiv.classList.add(`summaryArrivalFlightBox${chosenFlight.index}`);
                    document.getElementById('summaryArrivalInfo').innerHTML = "";
                    document.getElementById('summaryArrivalInfo').insertAdjacentHTML("afterbegin",  
                    `<h2>Wybrany lot:</h2>
                    <div id="arrivalInfo"><h3>Z:</h3> <span> ${chosenFlight.leaveInfo} </span></div>
                    <div id="arrivalInfoTo"><h3>Do:</h3><span> ${chosenFlight.arrivalLeavingInfo}</span></div>
                    <div id="arrivalDateInfo"> <h3>Data wylotu:</h3><span>${chosenFlight.arrivalDate.leavingDateValue.getDate()} ${ month[chosenFlight.arrivalDate.leavingDateValue.getMonth()]}</span> </div>
                    <div id="arrivalCompanyNameInfo"><h3>Przewoźnik: </h3><span>${chosenFlight.companyName}</span> </div>
                    <div id="arrivalPeopleQuantityInfo"><h3>Ilość osób:</h3><span>${peopleQuantityJoin}</span></div>
                    <div id="arrivalBaggageTypeInfo"><h3>Rodzaj bagażu: </h3> <span>${chosenFlight.baggageType}</span></div>
                    <div id="arrivalPriceFlightInfo"><h3>Cena za osobę:</h3><span>
                    
                    <input id="${chosenFlight.leaveInfo}${chosenFlight.index}" value="${chosenFlight.priceWithbaggage}">
                    <span>${chosenFlight.flightCurriency}</span>
                    <select name="currency" id="${chosenFlight.leaveInfo}currancy" class="currencySelect">

                    <option value="" disabled selected>przelicz kwotę</option>
                    <option value="eur">Euro</option>
                    <option value="usd">USD</option>
                    </select>
                    </span></div>
                    <div id="otherPrice"><h3>Cena w innej walucie </h3> <span id="${chosenFlight.leaveInfo}priceAfterCount">Przelicz walutę</span></div>
                    <div id="arrivalChosenSeat"><h3>Wybrane miejsce:</h3>
                    <span class="arrivalFlightBooking">Wybierz miejsce</span></div>
                    `);
                        res();}
            )}
            const countPrice = () => {
                return new Promise((res)=> {
                    const value = document.getElementById(`${chosenFlight.leaveInfo}${chosenFlight.index}`);
                    const selected = document.getElementById(`${chosenFlight.leaveInfo}priceAfterCount`);
                    const currancy = document.getElementById(`${chosenFlight.leaveInfo}currancy`);
                    currancy.addEventListener('change', ()=>{
                        fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currancy.value}/?format=json`) 
                        .then((resp) => resp.json())
                        .then( function (data) {
                            selected.innerHTML = `${((value.value)*(data.rates[0].mid)).toFixed(2)} ${currancy.value}`
                        })})
                        res();
                    })
               
                
        }  
            const acceptChosenFlight = () => {
                return new Promise((res) => {
                const button = document.getElementById(`arrivalFlightBooking`);
                                     
                button.addEventListener('click', function(){          
                    document.getElementsByClassName('arrivalFlightBaggagesBox')[0].style.display='none'; 
                    document.getElementById('flightBooking').classList.add('bookArrivalFlight');
                    button.classList.add('arrivalBook');
                    
                })
                res();
            })}
            const changeChosenTypeFlight = () => {        
                return new Promise((res) => {               
                document.getElementById(`arrivalChangeBaggage`).addEventListener('click',function(){
                    document.getElementsByClassName('arrivalFlightBaggagesBox')[0].style.display='block';
                    document.getElementsByClassName(`arrivalFlightBaggagesBox${chosenFlight.index}`)[0].style.display = "flex";

                    document.getElementsByClassName(`arrivalFlightBaggagesBox${chosenFlight.index}`)[0].scrollIntoView();
                    document.getElementById('arrivalFlightBooking').classList.remove('arrivalBook');
                   
                }) 
                res();                    
            }   )}
                           
               const newPrice = () => {
                   return new Promise((res) => {
                       res();
                   })
               } 
               newPrice()
               .then(createNewFlightPrice)
               .then(showNewFlightPrice)
               .then(createSummaryFlightDiv) 
               .then(countPrice)
               .then(acceptChosenFlight) 
               .then(changeChosenTypeFlight) 
               .catch((err)=>{
                console.log(err);
            })
           }))  
           res();
       })           
   }
   const chooseLeavingFlight = () => {
    return new Promise((res) => {
        const chooseArrivalFlightButton = document.getElementById('chooseLeavingFlight');
        // console.log(chooseArrivalFlightButton);
        chooseArrivalFlightButton.addEventListener('click',function(){
            document.getElementsByClassName('leaving-result')[0].scrollIntoView();
        })
        res();
    })
   
}
  
  
   const showInformation = () => {
       return new Promise((res)=> {
           res()
       })
   }          
   showInformation()
       .then(createFlightDiv)
       .then(companyInfoDiv)
       .then(leaveInfo)
       .then(timeLeaveInfo)
       .then(arrivalInfo)
       .then(flightNumberInfo)
       .then(flightPriceInfo)
       .then(createButton)
       .then(choosingFlight)
       .then(createBaggageFlightDiv)     
       .then(choosingBaggage)  
       .then(chooseLeavingFlight)  
       .catch((err)=>{
           console.log(err);
       })               

    }           
}

//wyszukanie lotu
function showArrivalData() {     
    document.getElementById('arrivalActive').innerHTML = "";   
    document.getElementById('results').style.display = "block";
    fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/PL/${currancy}/pl-PL/${destinationPlaceValue.value}/${leavingPlaceValue.value}/${arrivalDateObject.value}?inboundpartialdate=${leavingDateObject.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "adc1fd1dffmshe4f3df276326e51p107048jsned8090f3a33b",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
    })
        .then(response => response.json())             
        .then(function(data){            
            // console.log(data); 
            document.getElementById('arrivalflight').innerHTML = "";
            function addCompanyToArr() {
                for(let i=0; i<data.Carriers.length;i++){
                    companyId = data.Carriers[i].CarrierId;
                    companyName = data.Carriers[i].Name;
                    companyIdArr.push(companyId);
                    companyNameArr.push(companyName);               
                }
                return ;
            }
            addCompanyToArr();
            function addPlacesToArr() {
                for(let i=0; i<data.Places.length;i++){
                    placeId = data.Places[i].PlaceId;
                    placeName = data.Places[i].Name;
                    placeIdArr.push(placeId);
                    placeNameArr.push(placeName);               
                }
                return ;
            }
            addPlacesToArr();
            //WYŚWIETLANIE W .carousel #active  
            let leavingDateValue = arrivalDateObject.value;
            let currentLeavingDate = new Date();            
            currentLeavingDate.setTime(Date.parse(leavingDateValue));
            const activeSlide = new Slides(currentLeavingDate);
                       
            price = data.Quotes[0].MinPrice;  
            activeSlide.activeSlide(); 
           
            //wyświetlanie danych lotu
            data.Quotes.forEach((item,index) => {  
                const companyId = data.Quotes[index].OutboundLeg.CarrierIds;       
                const originInfo = data.Quotes[index].OutboundLeg.OriginId;
                const desinationInfo = data.Quotes[index].OutboundLeg.DestinationId;
                const flightDurationinfo = '';
                const flightNumber = '';
                const flightPrice = data.Quotes[index].MinPrice;
                const companyName = companyNameArr[companyIdArr.indexOf(companyId[0])];
                const placeLeaveName = placeNameArr[placeIdArr.indexOf(originInfo)]; 
                const placeArivalName = placeNameArr[placeIdArr.indexOf(desinationInfo)];
                const flightCurriency = data.Currencies[0].Symbol;
                const itemIndex = data.Quotes[index].QuoteId;
                const arrivalDate = activeSlide;
                const flight = new Flight(companyId,companyName,placeLeaveName,flightDurationinfo,placeArivalName,flightNumber,flightPrice,flightCurriency,itemIndex,arrivalDate);
                flight.showFlightData();
            }); 
        }) 
        .then(function(){
            document.getElementById('summary').style.display = "none";
            document.getElementById('summaryLeaveInfo').innerHTML = ' <input type="button" id="chooseLeavingFlight" value="Wybierz lot">';
            document.getElementById('summaryArrivalInfo').innerHTML = ' <input type="button" id="chooseArrivalFlight" value="Wybierz lot powrotny">';
        })  
        .catch((err) => {
            const h4 = document.createElement('h4');
            h4.innerHTML = "Brak lotów w wybranym terminie";
            document.getElementById('arrivalActive').appendChild(h4);
            console.error(err);
        }); 
};
module.exports = {
    showArrivalData
}
