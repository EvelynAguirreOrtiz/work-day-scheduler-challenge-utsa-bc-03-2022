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
var textOneEl = document.getElementById("text13");
var textTwoEl = document.getElementById("text14");
var textThreeEl = document.getElementById("text15");
var textFourEl = document.getElementById("text16");
var textFiveEl = document.getElementById("text17");


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
		textBlock: document.getElementById("text14"),
		saveBtn: document.getElementById("save-14")
	},
	{ threePM: document.getElementById("15-p").innerHTML = moment({hour: 15}).format("hA"),
		textBlock: document.getElementById("text15"),
		saveBtn: document.getElementById("save-15")
	},
	{ fourPM: document.getElementById("16-p").innerHTML = moment({hour: 16}).format("hA"),
		textBlock: document.getElementById("text16"),
		saveBtn: document.getElementById("save-16")
	},
	{ fivePM: document.getElementById("17-p").innerHTML = moment({hour: 17}).format("hA"),
		textBlock: document.getElementById("text17"),
		saveBtn: document.getElementById("save-17")
	}
];


var currentHour = moment().format("hA");
var i = 8
var changeColor = function () { 
	for (i = 8; i <= 17; i++) {
	var blockHour = moment({hour: i}).format("hA");
	// console.log(blockHour)
		if (blockHour === '8AM') { 
			// console.log ("yes");
			$(textEightEl).removeClass("future");
			$(textEightEl).addClass("present");
		} else
		if (blockHour === '9AM') { 
			// console.log ("yes");
			$(textEightEl).removeClass("present");
			$(textEightEl).addClass("past");
			$(textNineEl).removeClass("future");
			$(textNineEl).addClass("present");
		}  else
		if (blockHour === '10AM') { 
				// console.log(blockHour)
			$(textNineEl).removeClass("present");
			$(textNineEl).addClass("past");
			$(textTenEl).removeClass("future");
			$(textTenEl).addClass("present");
		}  else
		if (blockHour === '11AM') { 
			// console.log (blockHour);
			$(textTenEl).removeClass("present");
			$(textTenEl).addClass("past");
			$(textElevenEl).removeClass("future");
			$(textElevenEl).addClass("present");
		}  else
		if (blockHour === '12PM') { 
			// console.log (blockHour);
			$(textElevenEl).removeClass("present");
			$(textElevenEl).addClass("past");
			$(textTwelveEl).removeClass("future");
			$(textTwelveEl).addClass("present");
		}  else
		if (blockHour === '1PM') { 
			// console.log(blockHour)
			$(textTwelveEl).removeClass("present");
			$(textTwelveEl).addClass("past");
			$(textOneEl).removeClass("future");
			$(textOneEl).addClass("present");
		}  else
		if (blockHour === '2PM') { 
			console.log (blockHour);
			$(textOneEl).removeClass("present");
			$(textOneEl).addClass("past");
			$(textTwoEl).removeClass("future");
			$(textTwoEl).addClass("present");
		}  else
		if (blockHour === '3PM') { 
			// console.log ("yes");
			$(textTwoEl).removeClass("present");
			$(textTwoEl).addClass("past");
			$(textThreeEl).removeClass("future");
			$(textThreeEl).addClass("present");
		}  else
		if (blockHour === '4PM') { 
			// console.log ("yes");
			$(textThreeEl).removeClass("present");
			$(textThreeEl).addClass("past");
			$(textFourEl).removeClass("future");
			$(textFourEl).addClass("present");
		}  else
		if (blockHour === '5PM') { 
			// console.log ("yes");
			$(textFourEl).removeClass("present");
			$(textFourEl).addClass("past");
			$(textFiveEl).removeClass("future");
			$(textFiveEl).addClass("present");
		}	
	}	 
};
changeColor();


// save text input
var saveSchedule8El = document.getElementById("save-8"); 
var saveSchedule9El = document.getElementById("save-9"); 
var saveSchedule10El = document.getElementById("save-10"); 
var saveSchedule11El = document.getElementById("save-11"); 
var saveSchedule12El = document.getElementById("save-12"); 
var saveSchedule13El = document.getElementById("save-13"); 
var saveSchedule14El = document.getElementById("save-14"); 
var saveSchedule15El = document.getElementById("save-15"); 
var saveSchedule16El = document.getElementById("save-16"); 
var saveSchedule17El = document.getElementById("save-17"); 

saveSchedule8El.addEventListener('click', function () {
	localStorage.setItem("text8", document.getElementById("text8").value);
	JSON.parse(localStorage.getItem("text8"));
	console.log(document.getElementById("text8").value)
});
	
saveSchedule9El.addEventListener('click', function () {
		localStorage.setItem("text9", document.getElementById("text9").value);
		JSON.parse(localStorage.getItem("text9"));
		console.log(document.getElementById("text9").value)
	});
	
saveSchedule10El.addEventListener('click', function () {
		localStorage.setItem("text10", document.getElementById("text10").value);
		JSON.parse(localStorage.getItem("text10"));
		console.log(document.getElementById("text10").value)
	});
	
saveSchedule11El.addEventListener('click', function () {
		localStorage.setItem("text11", document.getElementById("text11").value);
		JSON.parse(localStorage.getItem("text11"));
		console.log(document.getElementById("text11").value)
	});
	
saveSchedule12El.addEventListener('click', function () {
		localStorage.setItem("text12", document.getElementById("text12").value);
		JSON.parse(localStorage.getItem("text12"));
		console.log(document.getElementById("text12").value)
	});

saveSchedule13El.addEventListener('click', function () {
	localStorage.setItem("text13", document.getElementById("text13").value);
	JSON.parse(localStorage.getItem("text13"));
	console.log(document.getElementById("text13").value)
});

saveSchedule14El.addEventListener('click', function () {
	localStorage.setItem("text14", document.getElementById("text14").value);
	JSON.parse(localStorage.getItem("text14"));
	console.log(document.getElementById("text14").value)
});

saveSchedule15El.addEventListener('click', function () {
	localStorage.setItem("text15", document.getElementById("text15").value);
	JSON.parse(localStorage.getItem("text15"));
	console.log(document.getElementById("text15").value)
});
	
saveSchedule16El.addEventListener('click', function () {
	localStorage.setItem("text16", document.getElementById("text16").value);
	JSON.parse(localStorage.getItem("text16"));
	console.log(document.getElementById("text16").value)
});

saveSchedule17El.addEventListener('click', function () {
	localStorage.setItem("text17", document.getElementById("text17").value);
	JSON.parse(localStorage.getItem("text17"));
	console.log(document.getElementById("text17").value)
});


// WHEN I refresh the page
// THEN the saved events persist
