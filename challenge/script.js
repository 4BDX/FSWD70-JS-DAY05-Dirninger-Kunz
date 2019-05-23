



// ----- discount calculation -----

var totalCost = prompt("Preis");
var discount;

if (totalCost < 40) {
	discount = 0;
} else if (totalCost >= 40 && totalCost < 100) {
	discount = 0.07;
	totalCost = totalCost * (1-discount);
} else {
	discount = 0.12;
	totalCost = totalCost * (1-discount);
};

// ----- tax calculation -----

var tax = 0.22;

	totalCost = totalCost * (1+tax);

document.write(totalCost);

