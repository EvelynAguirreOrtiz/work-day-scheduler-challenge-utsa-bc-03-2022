var currentDay = moment().format("dddd, MMMM Do, YYYY");
// the current day is displayed at the top of the calendar
document.getElementById("currentDay").innerHTML = "<p>" + currentDay + "</p>";

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

var hourArr = [
	{
		hour: document.getElementById("8-a").innerHTML = moment({ hour: 8 }).format("hA"),
		textBlock: document.getElementById("text8"),
		saveBtn: document.getElementById("save-8")
	},
	{
		hour: document.getElementById("9-a").innerHTML = moment({ hour: 9 }).format("hA"),
		textBlock: document.getElementById("text9"),
		saveBtn: document.getElementById("save-9")
	},
	{
		hour: document.getElementById("10-a").innerHTML = moment({ hour: 10 }).format("hA"),
		textBlock: document.getElementById("text10"),
		saveBtn: document.getElementById("save-10")
	},
	{
		hour: document.getElementById("11-a").innerHTML = moment({ hour: 11 }).format("hA"),
		textBlock: document.getElementById("text11"),
		saveBtn: document.getElementById("save-11")
	},
	{
		hour: document.getElementById("12-p").innerHTML = moment({ hour: 12 }).format("hA"),
		textBlock: document.getElementById("text12"),
		saveBtn: document.getElementById("save-12")
	},
	{
		hour: document.getElementById("13-p").innerHTML = moment({ hour: 13 }).format("hA"),
		textBlock: document.getElementById("text13"),
		saveBtn: document.getElementById("save-13")
	},
	{
		twoPM: document.getElementById("14-p").innerHTML = moment({ hour: 14 }).format("hA"),
		textBlock: document.getElementById("text14"),
		saveBtn: document.getElementById("save-14")
	},
	{
		threePM: document.getElementById("15-p").innerHTML = moment({ hour: 15 }).format("hA"),
		textBlock: document.getElementById("text15"),
		saveBtn: document.getElementById("save-15")
	},
	{
		fourPM: document.getElementById("16-p").innerHTML = moment({ hour: 16 }).format("hA"),
		textBlock: document.getElementById("text16"),
		saveBtn: document.getElementById("save-16")
	},
	{
		fivePM: document.getElementById("17-p").innerHTML = moment({ hour: 17 }).format("hA"),
		textBlock: document.getElementById("text17"),
		saveBtn: document.getElementById("save-17")
	}
];

// reset time block at beginning of day
var hourBlockColorEl = document.querySelector("description");
var resetDay = function () {
	$(hourBlockColorEl).addClass("future");
};
resetDay();
			
// color code time blocks
var currentHour = moment().format("hA");
var i = 8
var changeColor = function () {
	// for (i = 8; i < hourArr.length + 1; i++) {
		// var blockHour = moment({ hour: i }).format("hA");

		if (
			// blockHour === '8AM' && 
			currentHour === '8AM') {
			$(textEightEl).removeClass("future");
			$(textEightEl).addClass("present");
		} else if (
			currentHour === '9AM' ||
			currentHour === '10AM' ||
			currentHour === '11AM' ||
			currentHour === '12PM' ||
			currentHour === '1PM' ||
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textEightEl).removeClass("future");
			$(textEightEl).addClass("past");
		};

		if (
			// blockHour === '9AM' && 
		currentHour === '9AM') {
			$(textEightEl).removeClass("present");
			$(textEightEl).addClass("past");
			$(textNineEl).removeClass("future");
			$(textNineEl).addClass("present");
		} else if (
			currentHour === '10AM' ||
			currentHour === '11AM' ||
			currentHour === '12PM' ||
			currentHour === '1PM' ||
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textNineEl).removeClass("future");
			$(textNineEl).addClass("past");
		};

		if (
			// blockHour === '10AM' && 
			currentHour === '10AM') {
			$(textNineEl).removeClass("present");
			$(textNineEl).addClass("past");
			$(textTenEl).removeClass("future");
			$(textTenEl).addClass("present");
		} else if (
			currentHour === '11AM' ||
			currentHour === '12PM' ||
			currentHour === '1PM' ||
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {

			$(textTenEl).removeClass("future");
			$(textTenEl).addClass("past");
		};

		if (
			// blockHour === '11AM' && 
			currentHour === '11AM') {
			$(textTenEl).removeClass("present");
			$(textTenEl).addClass("past");
			$(textElevenEl).removeClass("future");
			$(textElevenEl).addClass("present");
		} else if (
			currentHour === '12PM' ||
			currentHour === '1PM' ||
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textElevenEl).removeClass("future");
			$(textElevenEl).addClass("past");
		};

		if (
			// blockHour === '12PM' && 
			currentHour === '12PM') {
			$(textElevenEl).removeClass("present");
			$(textElevenEl).addClass("past");
			$(textTwelveEl).removeClass("future");
			$(textTwelveEl).addClass("present");
		} else if (
			currentHour === '1PM' ||
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textTwelveEl).removeClass("future");
			$(textTwelveEl).addClass("past");
		};

		if (
			// blockHour === '1PM' && 
			currentHour === '1PM') {
			// console.log(blockHour)
			$(textTwelveEl).removeClass("present");
			$(textTwelveEl).addClass("past");
			$(textOneEl).removeClass("future");
			$(textOneEl).addClass("present");
		} else if (
			currentHour === '2PM' ||
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textOneEl).removeClass("future");
			$(textOneEl).addClass("past");
		};

		if (
			// blockHour === '2PM' && 
		currentHour === '2PM') {
			// console.log (blockHour);
			$(textOneEl).removeClass("present");
			$(textOneEl).addClass("past");
			$(textTwoEl).removeClass("future");
			$(textTwoEl).addClass("present");
		} else if (
			currentHour === '3PM' ||
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textTwoEl).removeClass("future");
			$(textTwoEl).addClass("past");
		};

		if (
			// blockHour === '3PM' && 
		currentHour === '3PM') {
			// (blockHour === '3PM') 
			$(textTwoEl).removeClass("present");
			$(textTwoEl).addClass("past");
			$(textThreeEl).removeClass("future");
			$(textThreeEl).addClass("present");
		} else if (
			currentHour === '4PM' ||
			currentHour === '5PM') {
			$(textThreeEl).removeClass("future");
			$(textThreeEl).addClass("past");
		};

		if (
			// blockHour === '4PM' && 
		currentHour === '4PM') {
			$(textThreeEl).removeClass("present");
			$(textThreeEl).addClass("past");
			$(textFourEl).removeClass("future");
			$(textFourEl).addClass("present");
			} else if (
				currentHour === '5PM') {
				$(textFourEl).removeClass("future");
				$(textFourEl).addClass("past");
		};

		if (
			// blockHour === '5PM' && 
		currentHour === '5PM') {
			$(textFourEl).removeClass("present");
			$(textFourEl).addClass("past");
			$(textFiveEl).removeClass("future");
			$(textFiveEl).addClass("present");
		};

		if (currentHour === '6PM') {
			$(textFiveEl).removeClass("present");
			$(textFiveEl).addClass("past");
			localStorage.clear();
		};


	// }
};
changeColor();

// save text input to local storage
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

$(document).ready(function () {
	$("#text8").val(localStorage.getItem("text8"));
});
saveSchedule8El.addEventListener('click', function () {
	localStorage.setItem("text8", document.getElementById("text8").value);
});

$(document).ready(function () {
	$("#text9").val(localStorage.getItem("text9"));
});
saveSchedule9El.addEventListener('click', function () {
	localStorage.setItem("text9", document.getElementById("text9").value);
});

$(document).ready(function () {
	$("#text10").val(localStorage.getItem("text10"));
});
saveSchedule10El.addEventListener('click', function () {
	localStorage.setItem("text10", document.getElementById("text10").value);
});

$(document).ready(function () {
	$("#text11").val(localStorage.getItem("text11"));
});
saveSchedule11El.addEventListener('click', function () {
	localStorage.setItem("text11", document.getElementById("text11").value);
});

$(document).ready(function () {
	$("#text12").val(localStorage.getItem("text12"));
});
saveSchedule12El.addEventListener('click', function () {
	localStorage.setItem("text12", document.getElementById("text12").value);
	console.log(document.getElementById("text12").value)
});

$(document).ready(function () {
	$("#text13").val(localStorage.getItem("text13"));
});
saveSchedule13El.addEventListener('click', function () {
	localStorage.setItem("text13", document.getElementById("text13").value);
});

$(document).ready(function () {
	$("#text14").val(localStorage.getItem("text14"));
});
saveSchedule14El.addEventListener('click', function () {
	localStorage.setItem("text14", document.getElementById("text14").value);
});

$(document).ready(function () {
	$("#text15").val(localStorage.getItem("text15"));
});
saveSchedule15El.addEventListener('click', function () {
	localStorage.setItem("text15", document.getElementById("text15").value);
});

$(document).ready(function () {
	$("#text16").val(localStorage.getItem("text16"));
});
saveSchedule16El.addEventListener('click', function () {
	localStorage.setItem("text16", document.getElementById("text16").value);
});

$(document).ready(function () {
	$("#text17").val(localStorage.getItem("text17"));
});
saveSchedule17El.addEventListener('click', function () {
	localStorage.setItem("text17", document.getElementById("text17").value);
});

