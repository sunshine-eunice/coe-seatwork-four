var coe = function(num){

		for (var count = 0 ; count<=num; count++){
			if ((count%5) ==0 && (count%3)==0){
				console.log("ComputerEngineering");
			}
			else if ((count%3)==0){
				console.log("Computer");
			}
			else if ((count%5)==0){
				console.log("Engineering");
			}
			else {
				console.log(count);
			}
		}
	}	
coe(100);