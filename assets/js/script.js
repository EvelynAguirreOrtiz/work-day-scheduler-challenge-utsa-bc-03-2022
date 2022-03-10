// the current day is displayed at the top of the calendar
var todaysDateEl = document.getElementById("currentDay").innerHTML = "<p>" + moment().format("dddd, MMMM Do, YYYY") + "</p>";
// hour of day (NEED TO FIX)
var timeEl = document.getElementById("hour").innerHTML = "<p>" + moment().format("hA") + "</p>";






// change background color as time passes

var currentTime = moment().format(hA);

var changeColor = function(timeEl) {
  // remove time class
  $(taskEl).removeClass("future");
  // apply new time class each hour
  if (moment().isAfter(currentTime)) {
    $(taskEl).addClass("present");
  }
};


// moment().seconds(30).valueOf() === new Date().setSeconds(30);
// set hour ---- moment().hour(Number); 
// get hour ---- moment().hour(); // Number


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I click into a timeblock
// THEN I can enter an event 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist