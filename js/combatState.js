console.log("combat script connected")

for(var i = 0; i <= currentHeros.length -1; i++)
{
	if(currentHeros[i] != 0)
	{
		document.getElementById("MemberSlot"+(i+1)).style.backgroundImage="url("+ linkingHero[currentHeros[i]].Portrait +")";
		document.getElementById("MemberSlot"+(i+1)).classList.remove("PartyMemberOff");
		
		var MemberUl = $('#MemberSlot'+ (i+1)).find('ul');
	    $(MemberUl).append("<li id='Attack1-"+currentHeros[i]+"' onclick='call_attack(linkingHero[" + currentHeros[i] + "].Attack1);'>" + linkingHero[currentHeros[i]].Attack1[0] + "</li>");
	    $(MemberUl).append("<li id='Attack2-"+currentHeros[i]+"' onclick='call_attack(linkingHero[" + currentHeros[i] + "].Attack2);'>" + linkingHero[currentHeros[i]].Attack2[0] + "</li>");
	    $(MemberUl).append("<li id='Special1-"+currentHeros[i]+"' onclick='call_attack(linkingHero[" + currentHeros[i] + "].Special1);'>" + linkingHero[currentHeros[i]].Special1[0] + "</li>");
	    $(MemberUl).append("<li id='Special2-"+currentHeros[i]+"' onclick='call_attack(linkingHero[" + currentHeros[i] + "].Special2);'>" + linkingHero[currentHeros[i]].Special2[0] + "</li>");
	    $(MemberUl).append("<li id='RunAway-"+currentHeros[i]+"' onclick='call_attack(linkingHero[" + currentHeros[i] + "].RunAway);'>" + linkingHero[currentHeros[i]].RunAway[0] + "</li>");
	}
	else
	{
		document.getElementById("MemberSlot"+(i+1)).classList.add("PartyMemberOff");
	}

}

for(var i = 0; i < 3; i++)
{
	if(currentMonsters[i] != 0)
	{
		document.getElementById("EnemySlot"+(i+1)).style.backgroundImage="url("+ linkingMonster[currentMonsters[i]].Portrait +")";
		document.getElementById("EnemySlot"+(i+1)).classList.remove("PartyMemberOff");
		var EnemyDiv = $('#EnemySlot'+ (i+1));
		$(EnemyDiv).append("<div class='enemyAction' onclick='attack_monster(linkingMonster["+currentMonsters[i]+"]);'></div>");

	}
	if(currentMonsters[i] == "")
	{
		document.getElementById("EnemySlot"+(i+1)).classList.add("PartyMemberOff");
	}

}

function updateUI()
{
	for(var i = 0; i <= currentHeros.length -1; i++)
	{
		if(linkingHero[currentHeros[i]][1] == false)
		{
			document.getElementById("Attack1-"+currentHeros[i]).classList.add("Used");
		}
		if(linkingHero[currentHeros[i]][1] == false)
		{
			document.getElementById("Attack2-"+currentHeros[i]).classList.add("Used");
		}
		if(linkingHero[currentHeros[i]][1] == false)
		{
			document.getElementById("Special1-"+currentHeros[i]).classList.add("Used");
		}
		if(linkingHero[currentHeros[i]][1] == false)
		{
			document.getElementById("Special2="+currentHeros[i]).classList.add("Used");
		}
		if(linkingHero[currentHeros[i]][1] == false)
		{
			document.getElementById("RunAway-"+currentHeros[i]).classList.add("Used");
		}

		//var MemberUlLi = $('#MemberSlot'+ (i+1)).find('ul');
		//console.log(MemberUlLi);
		//$MemberUlLi.addClass("Used");
	}
}