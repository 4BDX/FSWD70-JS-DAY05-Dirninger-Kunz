var pString = JSON.stringify(shoes);

for (let i = 0; i < shoes.length; i++) {
	var p = '<b>' + shoes[i].name + '</b><br><b>Größe: </b>' + shoes[i].size + '<br><b>Preis:</b> € ' + shoes[i].price;
	document.getElementsByClassName('discription')[i].innerHTML = p;

}

console.log(pString);