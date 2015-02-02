//This code was written by Elusch21//

function checkCash(cost) {
	if (cost > cash) return false; //FIX CASH PROBLEM. ADD TWO CASH SYSTEMS
	else return true;
} 

var createRifleman = function(turn) {
    if(checkCash(Rifleman.cost)) {
		cash = cash - Rifleman.cost;
    	var name = prompt("Whats the name?")
    	var unitArraySize = unitArray.length;
    	var riflemanArraySize = riflemanArray.length;
    	window["Rifleman" + unitArraySize] = new Rifleman(name);
    	unitArray.push(window["Rifleman" + unitArraySize])
    	riflemanArray.push(window["Rifleman" + riflemanArraySize])
    	if (turn===1) player1UnitArray.push(window["Rifleman" + unitArraySize]);
    	else if (turn===-1) player2UnitArray.push(window["Rifleman" + unitArraySize]);
    	addImage(Rifleman);
    } else {
    	alert("Not Enough Money!")
    }
}

var createTank = function(turn) {
	if(checkCash(Tank.cost)) {
		cash = cash - Tank.cost;
    	var name = prompt("Whats the name?")
    	var unitArraySize = unitArray.length;
    	var tankArraySize = tankArray.length;
    	window["Tank" + unitArraySize] = new Tank(name);
    	unitArray.push(window["Tank" + unitArraySize])
    	tankArray.push(window["Tank" + tankArraySize])
    	if (turn===1) player1UnitArray.push(window["Tank" + unitArraySize]);
    	else if (turn===-1) player2UnitArray.push(window["Tank" + unitArraySize]);
    	addImage(Tank);
    } else {
    	alert("Not Enough Money!")
    }
}


	Unit.prototype.levelUp = function() {
		if(checkCash(this.cost)) this.level ++;
		else alert("Not Enough Money");
	};

	var attackUnit = function(unitId) {
		console.log(unitId);
		if (turn===1) player2UnitArray[0].defense = player2UnitArray[0].defense - this.attack;
		else if (turn===-1) player1UnitArray[0].defense =  player1UnitArray[0].defense - this.attack;
		
		if (player2UnitArray[0].defense === 0) {
        	console.log(player2UnitArray[0].name + " is dead!");
        } 
	}





	/*this.attackUnit = function() {
        var i = true;
        while (i == true) {
            var toAttack = Math.floor(Math.random() * Units.length);
            if (Units[toAttack].name !== this.name) {
                i = false;
            }
        }
        Units[toAttack].defense -= this.attack;
        if (Units[toAttack].defense == 0) {
            Units.splice(toAttack, 1);
            removeImage(toAttack)
        }
    }*/

