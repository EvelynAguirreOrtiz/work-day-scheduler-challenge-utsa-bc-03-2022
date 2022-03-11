var currentDay = moment().format("dddd, MMMM Do, YYYY");
// the current day is displayed at the top of the calendar
document.getElementById("currentDay").innerHTML = "<p>" + currentDay + "</p>";

// hourly time
// var eightAMEl = document.getElementById("8-a");
// var nineAMEl = document.getElementById("9-a");
// var tenAMEl= document.getElementById("10-a");
// var elevenAMEl= document.getElementById("11-a");
// var twelvePMEl= document.getElementById("12-p");
// var onePMEl= document.getElementById("1-p");
// var twoPMEl= document.getElementById("2-p");
// var threePMEl= document.getElementById("3-p");
// var fourPMEl= document.getElementById("4-p");
// var fivePMEl= document.getElementById("5-p");


var textEightEl = document.getElementById("text8");
var textNineEl = document.getElementById("text9");
var textTenEl = document.getElementById("text10");
var textElevenEl = document.getElementById("text11");
var textTwelveEl = document.getElementById("text12");
var textOneEl = document.getElementById("text1");
var textTwoEl = document.getElementById("text2");
var textThreeEl = document.getElementById("text3");
var textFourEl = document.getElementById("text4");
var textFiveEl = document.getElementById("text5");

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

var hourArr = [
	{
		hour: document.getElementById("8-a").innerHTML = moment({hour: 8}).format("hA"),
		textBlock: document.getElementById("text8"),
		saveBtn: document.getElementById("save-8")
	},
	{ hour: document.getElementById("9-a").innerHTML = moment({hour: 9}).format("hA"),
		textBlock: document.getElementById("text9"),
		saveBtn: document.getElementById("save-9")
	},
	{ hour: document.getElementById("10-a").innerHTML = moment({hour: 10}).format("hA"),
		textBlock: document.getElementById("text10"),
		saveBtn: document.getElementById("save-10")
	},
	{ hour: document.getElementById("11-a").innerHTML = moment({hour: 11}).format("hA"),
		textBlock: document.getElementById("text11"),
		saveBtn: document.getElementById("save-11")
	},
	{ hour: document.getElementById("12-p").innerHTML = moment({hour: 12}).format("hA"),
		textBlock: document.getElementById("text12"),
		saveBtn: document.getElementById("save-12")
	},
	{ hour: document.getElementById("13-p").innerHTML = moment({hour: 13}).format("hA"),
		textBlock: document.getElementById("text13"),
		saveBtn: document.getElementById("save-13")
	},
	{ twoPM: document.getElementById("14-p").innerHTML = moment({hour: 14}).format("hA"),
 },
	{ threePM: document.getElementById("15-p").innerHTML = moment({hour: 15}).format("hA") },
	{ fourPM: document.getElementById("16-p").innerHTML = moment({hour: 16}).format("hA") },
	{ fivePM: document.getElementById("17-p").innerHTML = moment({hour: 17}).format("hA") }
];



var currentHour = moment().format("hA");
var i = 8
var changeColor = function () { 
	// for (i = 8; i <= 17; i++) {
	var blockHour = moment({hour: 8}).format("hA");
	// console.log(blockHour)
		if (blockHour === currentHour) { 
			console.log ("yes");
			$(textEightEl).removeClass("future");
			$(textEightEl).addClass("present");

			blockHour++;
		} 
		if (blockHour === currentHour) { 
			// console.log ("yes");
			$(textEightEl).removeClass("future");
			$(textEightEl).addClass("present");
			$(textNinetEl).removeClass("future");
			$(textNineEl).addClass("present");
			blockHour++;

		} 

		// else {
			// console.log ("no");
			// $(textEightEl).removeClass("future");
			// $(textEightEl).addClass("past");
		// }
	// }	 
};
changeColor();

// save text input
var scheduleItem8 = document.getElementById("text8").value;
// localStorage.setItem("scheduleItem8", JSON.stringify(scheduleItem8));
localStorage.setItem("scheduleItem8", scheduleItem8);


// var saveSchedule = function () {
	// localStorage.setItem("scheduleItem8", JSON.stringify(scheduleItem8));
	// document.getElementById("save-8").addEventListener('click', saveSchedule)
// 
// };
		
  // tasks = JSON.parse(localStorage.getItem("tasks"));
 
				

// WHEN I scroll down
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// 