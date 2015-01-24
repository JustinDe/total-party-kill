console.log("houseKeeper script connected");

var usedHeros = [];
var currentHeros = [];
var currentMonsters = [];
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

linkingMonster = 
{
	1: monsterMani.Monster01,
	2: monsterMani.Monster02,
	3: monsterMani.Monster03,
	4: monsterMani.Monster04,
	5: monsterMani.Monster05,
	6: monsterMani.Monster06,
	7: monsterMani.Monster07,
	8: monsterMani.Monster08,
	9: monsterMani.Monster09
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
}

function newCombat()
{
	currentMonsters = [];
	console.log("(newCombat) currentMonsters and currentHeros cleared");
	var numOfEnemies = Math.floor(Math.random() * 6) + 1;
	if(numOfEnemies <= 3)
	{
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);

	}
	if(numOfEnemies > 3 && numOfEnemies < 6)
	{
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
	}
	if(numOfEnemies == 6)
	{
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
	}
}

newGame();
newCombat();