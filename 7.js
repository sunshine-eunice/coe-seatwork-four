function mostFrequent(a){    
	var b = {};  
	var c = 0;  
	var d;   
	for(var e in a) {
        b[a[e]]=(b[a[e]] || 0)+1; 
        if(b[a[e]] > c) { 
                c = b[a[e]];  
                d = a[e];     
        }
	}
	return d + " ( " + c + " times )";
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequent(arr1);