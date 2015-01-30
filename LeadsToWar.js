//This code was worked on primarily by Ayush Sharma.

var cash = 1000;

function Unit(price, health, power) {
    this.price = price;
    //cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
};

function Infantry() {
    Unit.call(this, 100, 50, 100);    
}

Infantry.prototype = Object.create(Unit.prototype);
Infantry.prototype.constructor = Infantry;
function Unit(cost, level, attack, defense, speed, range, accuracy) {
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
        this.level++;
    };
    this.attackUnit = function() {
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
        }
    }
    
}
Rifleman.prototype = Object.create(Unit.prototype);

var John = new Infantry();

/*var Unit = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Infantry = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Vehicle = function(price, health, power) {
    this.price = price;
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};

var Aircraft = function (price, health, power) {
    this.price = price
    cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
    this.attack = function(prey) {
        prey.health = prey.health - this.power;
        if (prey.health < 0) {
            prey.health = 0;
        }
    };
    this.healthPack = function() {
        this.health = this.health + 50;
        if (this.health > this.fullHealth) {
            this.health = this.fullHealth;
        }
    };
};*/

/*var John = new Infantry(100, 50, 100);
var Bob = new Vehicle(200, 100, 100);
var Sam = new Aircraft(500, 150, 100);*/