// the current day is displayed at the top of the calendar
var todaysDateEl = document.getElementById("currentDay").innerHTML = "<p>" + moment().format("dddd, MMMM Do, YYYY") + "</p>";

// style schedule block 
var eightAMEl= document.getElementById("8-a").innerHTML = "<p>" + moment().format("8A") + "</p>";
var nineAMEl= document.getElementById("9-a").innerHTML = "<p>" + moment().format("9A") + "</p>";
var tenAMEl= document.getElementById("10-a").innerHTML = "<p>" + moment().format("10A") + "</p>";
var elevenAMEl= document.getElementById("11-a").innerHTML = "<p>" + moment().format("11A") + "</p>";
var twelvePMEl= document.getElementById("12-p").innerHTML = "<p>" + moment().format("12P") + "M" + "</p>";
var onePMEl= document.getElementById("1-p").innerHTML = "<p>" + moment().format("1P") + "M" + "</p>";
var twoPMEl= document.getElementById("2-p").innerHTML = "<p>" + moment().format("2P") + "M" + "</p>";
var threePMEl= document.getElementById("3-p").innerHTML = "<p>" + moment().format("3P") + "M" + "</p>";
var fourPMEl= document.getElementById("4-p").innerHTML = "<p>" + moment().format("4P") + "M" + "</p>";
var fivePMEl= document.getElementById("5-p").innerHTML = "<p>" + moment().format("5P") + "M" + "</p>";

// change background color as time passes
var currentHour = moment().format("hA");
// if schedule hour === current hour change class to "present"
var changeColor = function (){
  
}
// if schedule hour < current hour change class to "past"


// var changeColor = function(timeEl) {
//   // remove time class
//   $(taskEl).removeClass("future");
//   // apply new time class each hour
//   if (moment().isAfter(currentTime)) {
//     $(taskEl).addClass("present");
//   }
// };


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I click into a timeblock
// THEN I can enter an event 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist