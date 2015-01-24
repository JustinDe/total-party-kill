console.log("houseKeeper script connected");

var usedHero = [];
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
		if($.inArray(randChar, usedHero) == -1)
		{
			usedHero.push(randChar);
			console.log("(newHero) Added " + randChar + " to usedHero list");
			return randChar;
			foundNewChar = true;
		}
	}
	while(foundNewChar == false);
}

function newGame()
{
	localStorage.clear();
	console.log("(newGame) localStorage cleared");
	console.log("(newGame) Adding first 5 heros to usedHeros");
	for(var i = 1; i <= 5; i++)
	{
		localStorage.setItem("PartyMember" + i, newHero());
		localStorage.setItem("PartyMember" + i + "Attack1", true)
		localStorage.setItem("PartyMember" + i + "Attack2", true)
		localStorage.setItem("PartyMember" + i + "Special1", true)
		localStorage.setItem("PartyMember" + i + "Special2", true)
		localStorage.setItem("PartyMember" + i + "RunAway", true)
	}
	localStorage.setItem("Turn", 0);
	localStorage.setItem("Points", 0);
}

newGame();




console.log(linkingHero[localStorage.getItem("PartyMember1")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember2")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember3")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember4")].Name);
console.log(linkingHero[localStorage.getItem("PartyMember5")].Name);
