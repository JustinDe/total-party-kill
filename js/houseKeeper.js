console.log("houseKeeper script connected");

var usedHeros = [];
var currentHeros = [];
linkingHero = 
{
	1: heroMani.Hero01,
	2: heroMani.Hero02,
	3: heroMani.Hero03,
	4: heroMani.Hero04,
	5: heroMani.Hero05,
	6: heroMani.Hero06,
	7: heroMani.Hero07,
	8: heroMani.Hero08,
	9: heroMani.Hero09
}

function newHero()
{
	foundNewChar = false;
	do{
		var randChar = Math.floor(Math.random() * 9) + 1;
		if($.inArray(randChar, usedHeros) == -1)
		{
			usedHeros.push(randChar);
			currentHeros.push(randChar);
			console.log("(newHero) Added " + randChar + " to usedHeros list");
			return randChar;
			foundNewChar = true;
		}
	}
	while(foundNewChar == false);
}

function newGame()
{
	usedHeross = [];
	currentHeros = [];
	console.log("(newGame) usedHeross and currentHeros cleared");
	console.log("(newGame) Adding first 5 heros to usedHeross");
	for(var i = 1; i <= 5; i++)
	{
		newHero();
	}
	localStorage.setItem("Turn", 0);
	localStorage.setItem("Points", 0);
}

newGame();




console.log(linkingHero[localStorage.getItem("PartyMember1")].Attack1[0]);
console.log(linkingHero[localStorage.getItem("PartyMember2")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember3")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember4")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember5")].Name);
