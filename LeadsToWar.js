var cash = 1000;

function Unit(price, health, power) {
    this.price = price;
    //cash -= this.price;
    this.fullHealth = health;
    this.health = health;
    this.power = power;
};

function Tank() {
    Unit.call(this, 100, 50, 50);    
}

Tank.prototype = Object.create(Unit.prototype);
Tank.prototype.constructor = Tank;








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