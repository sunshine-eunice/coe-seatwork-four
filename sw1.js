function drawTriangle(a){
	var b = "#", c = "";
	for(var d = 1; d<=a; d++){
		for(var e = a; e<=a; e++ ){
			c += b;
		}
		console.log(c);
	}
}
drawTriangle(7);