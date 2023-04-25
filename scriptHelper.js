// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let div= document.getElementById("missionTarget");
   div.innerHTML=
               ` <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
   
}

function validateInput(testInput) {
    console.log("test input:"+ testInput)
    let numTestInput = Number(testInput);
   if (testInput=== '' || testInput===null){
    return "Empty"
   } else if (isNaN(numTestInput)===false){ 
    return "Is a Number"
   } else {
    return "Not a Number"
   } 
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus= document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if(validateInput(pilot)==="Empty"  || validateInput(copilot)==="Empty"  ||validateInput(fuelLevel)==="Empty"  ||validateInput(cargoLevel)==="Empty" ){
    alert("All fields are required!");
   } else if(validateInput(pilot)==="Is a Number"  || validateInput(copilot)==="Is a Number"  ||validateInput(fuelLevel)==="Not a Number"  ||validateInput(cargoLevel)==="Not a Number" ){ 
    alert("Please enter valid data!");
   } else  {
    list.style.visibility = "visible";
pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;
let launchStatus = document.getElementById("launchStatus");
if (fuelLevel < 10000 && cargoLevel < 10000){
    fuelStatus.innerHTML= "Fuel level too low for launch";
    cargoLevel.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "#C7254E";
} else if (fuelLevel < 10000 && cargoLevel > 10000){
    fuelStatus.innerHTML= "Fuel level too low for launch";
    cargoLevel.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "#C7254E";
} else if (fuelLevel >= 10000 && cargoLevel > 10000){
    fuelStatus.innerHTML= "Fuel level high enough for launch";
    cargoLevel.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "#C7254E";
} else {
    fuelStatus.innerHTML= "Fuel level high enough for launch";
    cargoLevel.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "#419F6A";
}
   }
};


   
//  else {validateInput(fuelLevel)< 10000){ list.style.visibility = "visible";
//  fuelStatus.innerHTML= `${fuelLevel} too low to launch!`} }




async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    
    //    console.log("response: " + response) 
    //    response.json().then( function(json) {
    //     console.log("json: " +json);
    //     return json;
    //  });
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    console.log("this is my pickPlanet fx");
    let planet = planets[Math.floor(Math.random()*planets.length)]
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
