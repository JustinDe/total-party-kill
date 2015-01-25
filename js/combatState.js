console.log("combat script connected")

for(var i = 0; i <= currentHeros.length -1; i++)
{
	if(currentHeros[i] != 0)
	{
		document.getElementById("MemberSlot"+(i+1)).style.backgroundImage="url("+ linkingHero[currentHeros[i]].Portrait +")";
		document.getElementById("MemberSlot"+(i+1)).classList.remove("PartyMemberOff");
		
		var MemberUl = $('#MemberSlot'+ (i+1)).find('ul');
	    $(MemberUl).append("<li onclick='call_attack(linkingHero[currentHeros[i]].Attack1)'>" + linkingHero[currentHeros[i]].Attack1[0] + "</li>");
	    $(MemberUl).append("<li onclick='call_attack(linkingHero[currentHeros[i]].Attack2)'>" + linkingHero[currentHeros[i]].Attack2[0] + "</li>");
	    $(MemberUl).append("<li onclick='call_attack(linkingHero[currentHeros[i]].Special1)'>" + linkingHero[currentHeros[i]].Special1[0] + "</li>");
	    $(MemberUl).append("<li onclick='call_attack(linkingHero[currentHeros[i]].Special2)'>" + linkingHero[currentHeros[i]].Special2[0] + "</li>");
	    $(MemberUl).append("<li onclick='call_attack(linkingHero[currentHeros[i]].RunAway)'>" + linkingHero[currentHeros[i]].RunAway[0] + "</li>");
	}
	else
	{
		document.getElementById("MemberSlot"+(i+1)).classList.add("PartyMemberOff");
	}

}

for(var p = 0; p < 3; p++)
{
	if(currentMonsters[p] != 0)
	{
		document.getElementById("EnemySlot"+(p+1)).style.backgroundImage="url("+ linkingMonster[currentMonsters[p]].Portrait +")";
		document.getElementById("EnemySlot"+(p+1)).classList.remove("PartyMemberOff");
		var EnemyDiv = $('#EnemySlot'+ (p+1));
		$(EnemyDiv).append("<div class='enemyAction' onclick='attack_monster(linkingMonster[currentMonsters[p]])'></div>");

	}
	if(currentMonsters[p] == "")
	{
		document.getElementById("EnemySlot"+(p+1)).classList.add("PartyMemberOff");
	}

}