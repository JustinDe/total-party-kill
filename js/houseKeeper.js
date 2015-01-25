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
	1: monsterMani.Enemy01,
	2: monsterMani.Enemy02,
	3: monsterMani.Enemy03,
	4: monsterMani.Enemy04,
	5: monsterMani.Enemy05,
	6: monsterMani.Enemy06,
	7: monsterMani.Enemy07,
	8: monsterMani.Enemy08,
	9: monsterMani.Enemy09
}

function newHero()
{
	foundNewChar = false;
	do{
		var randChar = Math.floor(Math.random() * 6) + 1;
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
		currentMonsters.push("");
		currentMonsters.push("");

	}
	if(numOfEnemies > 3 && numOfEnemies < 6)
	{
		//currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		foundNewMonster = false;
		do{
			var randMonster = Math.floor(Math.random() * 9) + 1;
			if($.inArray(randMonster, currentMonsters) == -1)
			{
				currentMonsters.push(randMonster);
				console.log("(newCombat) Added " + randMonster + " to currentMonsters list");
				foundNewMonster = true;
			}
		}
		while(foundNewMonster == false);
		currentMonsters.push("");
	}
	if(numOfEnemies == 6)
	{
		currentMonsters.push(Math.floor(Math.random() * 9) + 1);
		
		foundNewMonster = false;
		do{
			var randMonster = Math.floor(Math.random() * 9) + 1;
			if($.inArray(randMonster, currentMonsters) == -1)
			{
				currentMonsters.push(randMonster);
				console.log("(newCombat) Added " + randMonster + " to currentMonsters list");
				foundNewMonster = true;
			}
		}
		while(foundNewMonster == false);
		
		foundNewMonster2 = false;
		do{
			var randMonster = Math.floor(Math.random() * 9) + 1;
			if($.inArray(randMonster, currentMonsters) == -1)
			{
				currentMonsters.push(randMonster);
				console.log("(newCombat) Added " + randMonster + " to currentMonsters list");
				foundNewMonster2 = true;
			}
		}
		while(foundNewMonster2 == false);
	}
}

newGame();
newCombat();

console.log("(houseKeeper) Current Heros: " + currentHeros);
console.log("(houseKeeper) Current Monsters: " + currentMonsters);