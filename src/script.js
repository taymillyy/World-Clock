
function updateLATime() {
    let LAElement = document.querySelector(".LA");
    if (LAElement){
let LADateElement = document.querySelector(".date");
let LATimeElement = document.querySelector(".time");
LATime = moment().tz("America/Los_Angeles");

LADateElement.innerHTML= LATime.format(" MMMM Do YYYY");
LATimeElement.innerHTML= LATime.format("h:mm:ss [<small>]A [</small>]");
};
}
setInterval(updateLATime, 1000);

function updateParisTime() {
let parisElement = document.querySelector(".Paris");
if (parisElement){
let ParisDateElement = document.querySelector(".Parisdate");
let ParisTimeElement = document.querySelector(".Paristime");
ParisTime = moment().tz("Europe/Paris");

ParisDateElement.innerHTML= ParisTime.format(" MMMM Do YYYY");
ParisTimeElement.innerHTML= ParisTime.format("h:mm:ss [<small>]A [</small>]");
};
};

    
setInterval(updateParisTime, 1000);

function updateCity(event) {
let cityTimezone = event.target.value;
let cityName = cityTimezone. replace("_" , " ").split("/")[1];
let cityTime = moment().tz(cityTimezone);
let cityDateElement = document.querySelector("#cities");
cityDateElement.innerHTML= `
<div class="city">
        <div>
            <h2> ${cityName}</h2>  
         <div class="Parisdate">${cityTime.format("MMMM Do YYYY")} </div>
         </div>
         <div class="Paristime"> ${cityTime.format("h:mm:ss")} <small>${cityTime.
            format("A")} </small> </div>
       </div>
       `;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);