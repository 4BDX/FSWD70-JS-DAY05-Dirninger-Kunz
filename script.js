var sandwiches = {
	"sandwich": "hamburger",
	"calories": "260"
};

var fries = {
	"fries_size": "Large French Fries",
	"calories": "570"
};

var text = "My favorite sandwich is a "+ sandwiches.sandwich +" which has approximately "+sandwiches.calories+", along with it I enjoy eating "+fries.fries_size +" which have about "+fries.calories+".";

document.getElementById("food").innerHTML = text;

/* ----- Variante2 -----*/


var text1 = "My favorite sandwich is a "+ food[0].sandwich +" which has approximately "+food[0].calories+", along with it I enjoy eating "+food[1].fries_size +" which have about "+food[1].calories+".";

document.getElementById("food1").innerHTML = text1;

