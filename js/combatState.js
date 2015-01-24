//localStorage.setItem("PartyMember1", 0);

if(localStorage.getItem("PartyMember1") != 0)
{
	
	document.getElementById("MemberSlot1").style.backgroundImage="url("+linkingHero[localStorage.getItem("PartyMember1")].Portrait+")";
	document.getElementById("MemberSlot1").classList.remove("PartyMemberOff");
	
	var Member1Ul = $('#MemberSlot1').find('ul');
    $(Member1Ul).append("<li>"+linkingHero[localStorage.getItem("PartyMember1")].Attack1+"</li>");
    $(Member1Ul).append("<li>"+linkingHero[localStorage.getItem("PartyMember1")].Attack2+"</li>");
    $(Member1Ul).append("<li>"+linkingHero[localStorage.getItem("PartyMember1")].Special1+"</li>");
    $(Member1Ul).append("<li>"+linkingHero[localStorage.getItem("PartyMember1")].Special2+"</li>");
    $(Member1Ul).append("<li>"+linkingHero[localStorage.getItem("PartyMember1")].RunAway+"</li>");

}
else
{
	document.getElementById("MemberSlot1").classList.add("PartyMemberOff");
}

if(localStorage.getItem("PartyMember2") != 0)
{
	document.getElementById("MemberSlot2").style.backgroundImage="url("+linkingHero[localStorage.getItem("PartyMember2")].Portrait+")";
	document.getElementById("MemberSlot2").classList.remove("PartyMemberOff");
}
else
{
	document.getElementById("MemberSlot2").classList.add("PartyMemberOff");
}

if(localStorage.getItem("PartyMember3") != 0)
{
	document.getElementById("MemberSlot3").style.backgroundImage="url("+linkingHero[localStorage.getItem("PartyMember3")].Portrait+")";
	document.getElementById("MemberSlot3").classList.remove("PartyMemberOff");
}
else
{
	document.getElementById("MemberSlot3").classList.add("PartyMemberOff");
}

if(localStorage.getItem("PartyMember4") != 0)
{
	document.getElementById("MemberSlot4").style.backgroundImage="url("+linkingHero[localStorage.getItem("PartyMember4")].Portrait+")";
	document.getElementById("MemberSlot4").classList.remove("PartyMemberOff");
}
else
{
	document.getElementById("MemberSlot4").classList.add("PartyMemberOff");
}

if(localStorage.getItem("PartyMember5") != 0)
{
	document.getElementById("MemberSlot5").style.backgroundImage="url("+linkingHero[localStorage.getItem("PartyMember5")].Portrait+")";
	document.getElementById("MemberSlot5").classList.remove("PartyMemberOff");
}
else
{
	document.getElementById("MemberSlot5").classList.add("PartyMemberOff");
}