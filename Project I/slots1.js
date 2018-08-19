function DoSpin(){
	var balance = parseInt(document.getElementById("balance").value);
	var bet = parseInt(document.getElementById("bet").value);
	var machineImages = ["images/bar.jpg", "images/cherry.jpg", "images/donut.jpg", "images/lemon.jpg"];
				
	if ((balance - bet) > -1) {
		document.getElementById("balance").value = balance - bet;
		var pic1 = Math.floor((Math.random() * 4));
		var pic2 = Math.floor((Math.random() * 4));
		var pic3 = Math.floor((Math.random() * 4));
				
		document.getElementById("slot1").src = machineImages[pic1];
		document.getElementById("slot2").src = machineImages[pic2];
		document.getElementById("slot3").src = machineImages[pic3];
			
		CheckWinner(pic1,pic2,pic3,balance,bet);
	} else {
					alert("Insufficient Funds");
	}	


}

function CheckWinner(pic1, pic2, pic3, balance, bet) {
				if ((pic1 == pic2) && (pic2 == pic3)) {
					document.getElementById("balance").value = balance + (13 * bet);
					alert("You Win!");
				} else{
					alert("You Lose!")
				}
			}