// the current day is displayed at the top of the calendar
var todaysDate = document.getElementById("currentDay").innerHTML = "<p>" + moment().format("dddd, MMMM Do, YYYY") + "</p>";


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hou
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is 
// present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist