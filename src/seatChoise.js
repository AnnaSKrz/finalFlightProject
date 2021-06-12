const leavingPlaceValue = document.getElementById('leavingfligth');
const destinationPlaceValue = document.getElementById('arrival');
const idPlaces = ['LOND-sky','KRK-sky','NYCA-sky','WAW-sky'];
const planeObject = document.getElementById('airplane');
const object = document.getElementById('airplane');

class SeatChoise{
    constructor(buttonID){ 
        this.buttonID = buttonID;     
    }    
    embraer(){
        const showPlane = () => {
            return new Promise((res)=>{
                planeObject.data = "Emraer.svg" ;
                planeObject.style.width ="100%";               
                res();
            })
        } 
        const showSeat = () =>{
            return new Promise((res) => {
                document.getElementById('airplaneDiv').scrollIntoView(false);
                res();
            })
        }
        const bookSeat = () => {
            return new Promise((res)=>{
                res();
            })                
        }
        bookSeat()
        .then(showPlane)
        .then(showSeat)
    }
    boeing(){
        const showPlane = () => {
            return new Promise((res)=>{
                planeObject.data = "Boeing.svg"; 
                planeObject.style.width ="100%";             
                res();
            })
        }    
        const showSeat = () =>{
            return new Promise((res) => {
                document.getElementById('airplaneDiv').scrollIntoView(false);
                res();
            })
        }
        const bookSeat = () => {
            return new Promise((res)=>{                
            res();
            })
        }   
        bookSeat()
        .then(showPlane)
        .then(showSeat)
        
    }
    dreamliner(){
        const showPlane = () => {
            return new Promise((res)=>{
                planeObject.data = "Dreamliner787.svg";
                planeObject.style.width ="25%";
                res();
            })
        }    
        const showSeat = () =>{
            return new Promise((res) => {
                document.getElementById('airplaneDiv').scrollIntoView(false);
                res();
            })
        }
        const bookSeat = () => {
            return new Promise((res)=>{
                res();
            })
        }   
        bookSeat()
        .then(showPlane)
        .then(showSeat)
        .catch((err)=>{
            console.log(err);
        }) 
       
    }
    showSeat() {        
        const innerDiv =document.getElementsByClassName(this.buttonID)[0];
        // console.log(innerDiv);
        console.log(object);
        const summaryDiv = document.getElementById('summary'); 
        object.addEventListener("load", function(){
                const doc = object.getSVGDocument();  
                // console.log(doc);
                const rect = doc.querySelectorAll('rect');
                // console.log(rect);
                const rectArr = Object.entries(rect);
                // console.log(rectArr);
                
                rectArr.forEach(item => item[1].addEventListener("click", function(){                                       
                    innerDiv.innerHTML = "";
                    rectArr.forEach(item=>item[1].style.fill="white");
                    this.style.fill = "blue";                    
                    summaryDiv.scrollIntoView();
                    innerDiv.innerHTML = `${this.id}`; 
                    planeObject.data="";
                    document.getElementById('alertText').innerHTML="";
                }))  
        });   
    }
    showSeatInfo(){
        console.log(this);
        if((leavingPlaceValue.value == idPlaces[1]) && (destinationPlaceValue.value == idPlaces[3])){
            this.embraer();
            this.showSeat();
        } else if((leavingPlaceValue.value == idPlaces[1]) && (destinationPlaceValue.value == idPlaces[0]) || (leavingPlaceValue.value == idPlaces[0]) && (destinationPlaceValue.value == idPlaces[3])){
            this.boeing();
            this.showSeat()
        } else if((leavingPlaceValue.value == idPlaces[1]) && (destinationPlaceValue.value == idPlaces[2]) || (leavingPlaceValue.value == idPlaces[2]) && (destinationPlaceValue.value == idPlaces[3]) || (leavingPlaceValue.value == idPlaces[2]) && (destinationPlaceValue.value == idPlaces[0]) || (leavingPlaceValue.value == idPlaces[0]) && (destinationPlaceValue.value == idPlaces[2])){
            this.dreamliner();
            this.showSeat()
        } else {
            console.log('error')
        }  
    }
}

function seatChoise(e){  
    const buttonID = (e.target).id;
            if(buttonID == 'leaveFlightBooking'){
                const leavingSeatChoise = new SeatChoise(buttonID);
                // console.log('wykonuje sie leaving');
                leavingSeatChoise.showSeatInfo();
               
            } else if(buttonID == 'arrivalFlightBooking') {
                const arrivalSeatChois = new SeatChoise(buttonID);
                // console.log('wykonuje sie arrival');
                arrivalSeatChois.showSeatInfo();
            }

}         

module.exports = {
    seatChoise
}