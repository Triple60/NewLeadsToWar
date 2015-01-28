//New LTW//
//This code was written by Elusch21//
var Riflemen = [];
cash = 1000;
function checkCash(cost) {
	if (cost > cash) {
		return false;
	}
	else {
		return true;
	}
}
function getNewRifleman() {
	var tobuy = checkCash(Rifleman.cost);
	if (tobuy == false) {
		alert("You don't have enough money!");
	}
	else {
		var name = prompt("What is his name?");
		Riflemen.push(new Rifleman(name));
		cash = cash - 100;
	}
};
/*function Unit(cost, level, attack, defense, speed, range, accuracy) {
		this.cost = cost;
		this.level = level;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
		this.range = range;
		this.accuracy = accuracy;
		Unit.instances = 0;
}
function Rifleman(name) {
	this.name = name;
	Unit.call(this, 25, 1, 10, 10, 10, 10, 10);
	this.levelUp = function() {
		var toLevel = checkCash(Rifleman.cost);
		this.level ++;
	};
	
}
Rifleman.prototype = Object.create(Unit.prototype); */