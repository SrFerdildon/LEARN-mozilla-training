var myImage = document.querySelector("img");
myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/shrek.png") {
		myImage.setAttribute("src", "images/shrek-chill.jpg");
	}
	else {
		myImage.setAttribute("src", "images/shrek.png")
	}
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please enter your name");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Shrek is cool, " + myName;
};

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Shrek is cool, " + storedName;
};

myButton.onclick = function () {
	setUserName();
};