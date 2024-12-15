console.log("manifestDestity script connected");

$.ajaxSetup({async: false});
var heroMani;
var monsterMani;

function getCharManifest()
{
	$.getJSON("characterManifest.json", function(charMani)
	{
		heroLookup(charMani);   
	})
	.fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
   		console.log( "Request Failed: " + err );
	});
}

function heroLookup(charMani)
{
	heroMani = charMani;
	console.log("(manifestDestiy/heroLookup) heroMani is ready for use");
}

function getMonsterManifest()
{
	$.getJSON("monsterManifest.json", function(monMani)
	{
		monsterLookup(monMani);   
	})
	.fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
   		console.log( "Request Failed: " + err );
	});
}

function monsterLookup(monMani)
{
	monsterMani = {};
	monsterMani = monMani;
	console.log("(manifestDestiy/monsterLookup) monsterMani is ready for use");
}

getCharManifest();
getMonsterManifest();