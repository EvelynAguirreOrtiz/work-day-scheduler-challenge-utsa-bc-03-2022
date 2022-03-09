// the current day is displayed at the top of the calendar
var todaysDate = document.getElementById("currentDay").innerHTML = "<p>" + moment().format("dddd, MMMM Do, YYYY") + "</p>";

var time = document.getElementById("hour").innerHTML = "<p>" + moment().format("hA") + "</p>";


// change background color as time passes
var auditTask = function(taskEl) {
  // get date from task element
  // var date = $(taskEl).find("span").text().trim();
  var currentTime = moment().format(hA);
  // remove time class
  $(taskEl).removeClass("future");
  // apply new time class each hour
  if (moment().isAfter(currentTime)) {
    $(taskEl).addClass("present");
  }
};






// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I click into a timeblock
// THEN I can enter an event 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist