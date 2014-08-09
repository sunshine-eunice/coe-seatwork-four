function countBs(a){
	var b = a.length,c = 0;
	for(var e = 0; e < b; e++){
		if( a.substring(e, e+1) == "B"){c++;};
	}
	return c;
}
console.log(countBs("BBC"));