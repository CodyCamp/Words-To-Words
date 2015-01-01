walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bnode.js\b/g, "my.butt");
	v = v.replace(/\bNode.js\b/g, "My.butt");
	v = v.replace(/\bNode.Js\b/g, "My.Butt");
	v = v.replace(/\bnodejs\b/g, "mybutt");
	v = v.replace(/\bnodeJS\b/g, "myBUTT");
	v = v.replace(/\bNode.JS\b/g, "My.BUTT");
	v = v.replace(/\bnode.JS\b/g, "my.BUTT");
	v = v.replace(/\b#node.jsistheonlyrealdevlanguage\b/g, "#my.buttistheonlyrealdevlanguage");
	v = v.replace(/\b#node.jsIsTheOnlyRealDevLanguage\b/g, "#my.ButtIsTheOnlyRealDevLanguage");
	v = v.replace(/\b#nodejsistheonlyrealdevlanguage\b/g, "#my.buttistheonlyrealdevlanguage");
	v = v.replace(/\b#nodejsIsTheOnlyRealDevLanguage\b/g, "#my.ButtIsTheOnlyRealDevLanguage");
	v = v.replace(/\b#NodeJsIsTheOnlyRealDevLanguage\b/g, "#My.ButtIsTheOnlyRealDevLanguage");
	v = v.replace(/\b#Node.jsIsTheOnlyRealDevLanguage\b/g, "#My.ButtIsTheOnlyRealDevLanguage");


	//calories to delicious
	v = v.replace(/\bcalorie\b/g, "delicious");
	v = v.replace(/\bcalories\b/g, "delicious");
	v = v.replace(/\bCalorie\b/g, "Delicious");
	v = v.replace(/\bCalories\b/g, "Delicious");
	v = v.replace(/\bCALORIE\b/g, "DELICIOUS");
	v = v.replace(/\bCALORIES\b/g, "DELICIOUS");

	// car to wagon
	v = v.replace(/\bcar\b/g, "wagon");
	v = v.replace(/\bCar\b/g, "Wagon");
	v = v.replace(/\bCAR\b/g, "WAGON");
	v = v.replace(/\bcars\b/g, "wagons");
	v = v.replace(/\bCars\b/g, "Wagons");
	v = v.replace(/\bCARS\b/g, "WAGONS");

	//expert to sorcerer
	v = v.replace(/\bexpert\b/g, "sorcerer");
	v = v.replace(/\bExpert\b/g, "Sorcerer");
	v = v.replace(/\bEXPERT\b/g, "SORCERER");
	v = v.replace(/\bexperts\b/g, "sorcerers");
	v = v.replace(/\bExperts\b/g, "Sorcerers");
	v = v.replace(/\bEXPERTS\b/g, "SORCERERS");
	v = v.replace(/\bexpert's\b/g, "sorcerer's")
	v = v.replace(/\bExpert's\b/g, "Sorcerer's")
	v = v.replace(/\bEXPERT'S\b/g, "SORCERER'S")

	//cloud to butt
	v = v.replace(/\bcloud\b/g, "butt");
	v = v.replace(/\bCloud\b/g, "Butt");
	v = v.replace(/\bCLOUD\b/g, "BUTT");
	v = v.replace(/\bclouds\b/g, "butts");
	v = v.replace(/\bClouds\b/g, "Butts");
	v = v.replace(/\bCLOUDS\b/g, "BUTTS");

	textNode.nodeValue = v;
}