// the current day is displayed at the top of the calendar
var todaysDateEl = document.getElementById("currentDay").innerHTML = "<p>" + moment().format("dddd, MMMM Do, YYYY") + "</p>";

// style schedule block 
// var eightAMEl = document.getElementById("8-a").innerHTML = "<p>" + moment().format("8A") + "</p>";
// var nineAMEl = document.getElementById("9-a").innerHTML = "<p>" + moment().format("9A") + "</p>";
// var tenAMEl= document.getElementById("10-a").innerHTML = "<p>" + moment().format("10A") + "</p>";
// var elevenAMEl= document.getElementById("11-a").innerHTML = "<p>" + moment().format("11A") + "</p>";
// var twelvePMEl= document.getElementById("12-p").innerHTML = "<p>" + moment().format("12P") + "M" + "</p>";
// var onePMEl= document.getElementById("1-p").innerHTML = "<p>" + moment().format("1P") + "M" + "</p>";
// var twoPMEl= document.getElementById("2-p").innerHTML = "<p>" + moment().format("2P") + "M" + "</p>";
// var threePMEl= document.getElementById("3-p").innerHTML = "<p>" + moment().format("3P") + "M" + "</p>";
// var fourPMEl= document.getElementById("4-p").innerHTML = "<p>" + moment().format("4P") + "M" + "</p>";
// var fivePMEl= document.getElementById("5-p").innerHTML = "<p>" + moment().format("5P") + "M" + "</p>";

// time block array
// var hourArr = [  
//   {eightAM : document.getElementById("8-a").innerHTML = "<p>" + moment().format("8A") + "</p>"},
//   {nineAM : document.getElementById("9-a").innerHTML = "<p>" + moment().format("9A") + "</p>"},
//   {tenAM : document.getElementById("10-a").innerHTML = "<p>" + moment().format("10A") + "</p>"},
//   {elevenAM : document.getElementById("11-a").innerHTML = "<p>" + moment().format("11A") + "</p>"},
//   {twelvePM : document.getElementById("12-p").innerHTML = "<p>" + moment().format("12P") + "M" + "</p>"},
//   {onePM : document.getElementById("1-p").innerHTML = "<p>" + moment().format("1P") + "M" + "</p>"},
//   {twoPM : document.getElementById("2-p").innerHTML = "<p>" + moment().format("2P") + "M" + "</p>"},
//   {threePM : document.getElementById("3-p").innerHTML = "<p>" + moment().format("3P") + "M" + "</p>"},
//   {fourPM : document.getElementById("4-p").innerHTML = "<p>" + moment().format("4P") + "M" + "</p>"},
//   {fivePM : document.getElementById("5-p").innerHTML = "<p>" + moment().format("5P") + "M" + "</p>"}];




// change background color as time passes
var currentHour = moment().format("hA");

var hourArr = [
	{
		hour: document.getElementById("8-a").innerHTML = moment().format("8") + "AM",
		textBlock: document.getElementById("text8"),
	},
	// { nineAM: document.getElementById("9-a").innerHTML = "<p>" + moment().format("9A") + "</p>" },
	// { tenAM: document.getElementById("10-a").innerHTML = "<p>" + moment().format("10A") + "</p>" },
	// { elevenAM: document.getElementById("11-a").innerHTML = "<p>" + moment().format("11A") + "</p>" },
	// { twelvePM: document.getElementById("12-p").innerHTML = "<p>" + moment().format("12P") + "M" + "</p>" },
	// { onePM: document.getElementById("1-p").innerHTML = "<p>" + moment().format("1P") + "M" + "</p>" },
	// { twoPM: document.getElementById("2-p").innerHTML = "<p>" + moment().format("2P") + "M" + "</p>" },
	// { threePM: document.getElementById("3-p").innerHTML = "<p>" + moment().format("3P") + "M" + "</p>" },
	// { fourPM: document.getElementById("4-p").innerHTML = "<p>" + moment().format("4P") + "M" + "</p>" },
	// { fivePM: document.getElementById("5-p").innerHTML = "<p>" + moment().format("5P") + "M" + "</p>" }
];




// var timeBlock = document.getElementById
// // if schedule hour === current hour change class to "present"
var changeColor = function () {
	for (i = 0; i < hourArr.length; i++) {
		if (moment().format("hA").isAfter(hourArr[i].hour)) {
			hourArr[i].textBlock.removeAttribute('class','future');
			hourArr[i].textBlock.addAttribute('class','past');
	    } else { 
			if ((hourArr[i].hour).isSame(currentHour)) {
			$().removeClass("future");
			$().addClass("present");
      }
		}
	} 
};

			// var changeColor = function () {
				// remove time class
				// if (currentHour.isAfter(currentTime)) {
					// $().addClass("future");
					
					// $().removeClass("future");
					// apply new time class each hour
					// if (moment().isAfter(currentTime)) {
						// $(taskEl).addClass("present");
					// }
				// };


// WHEN I scroll down
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist