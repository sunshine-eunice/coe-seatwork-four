function convertFirstLetter(a){
	var b = a.split(" "),c = "";
	for(var d in b){
		c += (b[d].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) + " ");
	}
	return c.substring(0,c.length-1);
}