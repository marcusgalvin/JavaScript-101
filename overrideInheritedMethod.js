//Directions:

// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

//Given Code:

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//Solution:

Penguin.prototype.fly = function() {
    return  "Alas, this is a flightless bird.";
};