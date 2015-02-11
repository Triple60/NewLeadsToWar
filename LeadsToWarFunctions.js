//This code was written by Elusch21//

function checkCash(cost) {
	if (cost > cash) {
        return false; //FIX CASH PROBLEM. ADD TWO CASH SYSTEMS
    }
	else {
        return true;
    }
} 

var createRifleman = function(turn) {
    if(checkCash(Rifleman.cost)) {
		cash -= Rifleman.cost;
    	var name = prompt("Whats the name?")
    	var unitArraySize = unitArray.length;
    	var riflemanArraySize = riflemanArray.length;
    	window["Rifleman" + unitArraySize] = new Rifleman(name);
    	unitArray.push(window["Rifleman" + unitArraySize])
    	riflemanArray.push(window["Rifleman" + riflemanArraySize])
    	if (turn === 1) player1UnitArray.push(window["Rifleman" + unitArraySize]);
    	else if (turn === -1) player2UnitArray.push(window["Rifleman" + unitArraySize]);
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
    	if (turn === 1) player1UnitArray.push(window["Tank" + unitArraySize]);
    	else if (turn === -1) player2UnitArray.push(window["Tank" + unitArraySize]);
    	addImage(Tank);
    } else {
    	alert("Not Enough Money!")
    }
}


	Unit.prototype.levelUp = function() {
		if(checkCash(this.cost)) this.level ++;
		else alert("Not Enough Money");
	};

	var attackUnit = function(/*unitId*/) {
		//console.log(unitId);
        turn = turn * -1;
        
        if (player1UnitArray.length === 0) {
            turn = turn * -1;
            console.log("You can't attack Player 2!");
        }
        
        else if (player2UnitArray.length === 0) {
            turn = turn * -1;
            console.log("You can't attack Player 1!");
        }
        
        else {
            
            if (turn===1) {
                turn = turn * -1;
                player2UnitArray[0].defense = player2UnitArray[0].defense - player1UnitArray[0].attack;
            }
            
            else if (turn===-1) {
                turn = turn * -1;
                player1UnitArray[0].defense = player1UnitArray[0].defense - player2UnitArray[0].attack;
            }
            
            
            
            if (player2UnitArray[0].defense === 0) {
                removeImage(1);
                turn = turn * -1;
                console.log(player2UnitArray[0].name + " is dead!");
            }

            else if (player1UnitArray[0].defense === 0) {
                removeImage(1);
                turn = turn * -1;
                console.log(player1UnitArray[0].name + " is dead!");
            }
        }
        
        turn = turn * -1;
        
	}

/*function nUnits(team) {
    return team.length;
}*/
    
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
