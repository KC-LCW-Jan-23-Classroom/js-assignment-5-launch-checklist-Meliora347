// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       
       console.log(listedPlanets);
   }).then(function () {
      //  console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
      let pickedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
      })

   


let list = document.getElementById("faultyItems");
   let form = document.getElementsByTagName("form");
   // console.log(form[0])

   form[0].addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot= copilotInput.value;
    console.log(pilotInput);

    let fuelInput= document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelInput.value;

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoInput.value;


    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});