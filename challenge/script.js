var cart = [10, 20, 30]/*new Array()*/;
var shipping = new Array();

/*cart.push(); // Preis für hinzugefügtes Produkt in Array Cart
shipping.push(shoes[].shipping);*/
var cartTotal = 0;
var shipTotal = 0;

function sumUp (arr) {
	var result = 0;
	for (i = 0; i < arr.length; i++) {
	result = result + arr[i];
	}
	return result;
}


document.write(cartTotal);


function addToCart(obj){
	shipping.push(obj);
	console.log(shipping);
}

var btn = document.getElementsByTagName("button");

for(let i = 0 ; i< btn.length; i++){
	btn[i].addEventListener("click",function(){addToCart(shoes[i])},false);
}

// ----- discount calculation -----

var totalCost;
var discount;

if (totalCost < 40) {
	discount = 0;
} else if (totalCost >= 40 && totalCost < 100) {
	discPerc = 0.07;
	discount = totalCost * discPerc;
} else {
	discPerc = 0.12;
	discount = totalCost * discPerc;
};

// ----- shipping calculation ----







// ----- tax calculation -----

var tax = 0.22;

	totalCost = totalCost * (1+tax);





// ----- FINAL CALCULATION ----

var cartTotal= sumUp (cart);
console.log(cartTotal);




sumUp (shipping);


