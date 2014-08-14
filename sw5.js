function countChar(a,b){
	var c = a.length,d = 0;
	for(var e = 0; e < c; e++){
		if( a.substring(e, e+1) == b){d++;};
	}
	return d;
}
console.log(countChar("kakkerlak", "k"));