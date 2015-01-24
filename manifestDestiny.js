console.log("manifestDestity script connected");

$.ajaxSetup({async: false});
var heroMani;

function getManifest()
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

getManifest();