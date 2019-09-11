/**/
var cat = {};
  cat.legs = 3;
  cat.name = "Harmony";
  cat.color = "Tortoiseshell";

var myCrazyObject = {
  "name":"A ridiculous object",
  "some array":[7, 9, {purpose: "confusion", number:123}, 3.3],
  "random animal": "Banana Shark"
};
  myCrazyObject['some array']; // 7,9,[object Object],3.3
  myCrazyObject['some array'][0]; // 7

tst['some array'][2]; // [object Object]
tst['some array'][2].number; // 123

var myBackpack = {
  food: "bananas",
  equipment: "map",
  clothing: "hat"
}; print(myBackpack.food);

var myBackpack = {
  food: ["bananas", "nuts", "energy bar"],
  equipment: ["map", "compass"],
  clothing: ["hat", "jacket", "scarf"]
}; print(myBackpack.food);

var car = {type:"Fiat", model:"500", color:"white"};

/* Object properties ES6 */

var x = "hello world", y = 25
var a = { x, y }
// is equivalent to the ES5:
{x: x, y: y}


var x = "hello world", y = 25
var a = {x: x, y: y}
a["joe" + y] = 4
// a is now:
{x: "hello world", y: 25, joe25: 4}

var a = {x, y, ["joe" + y]: 4}
// returns
{x: "hello world", y: 25, joe25: 4}

var a = {x, y, ["joe" + y]: 4, foo(v) { return v + 4 }}
a.foo(2)
// returns
6

/* FORMAL CLASS DEFINITION SYNTAX */
  // Class definition
    class Circle {
      constructor(radius) {
        this.radius = radius
      }
    }
    // use it
    var c = new Circle(4)
    // returns: Circle {radius: 4}
  
  // Declaring methods
    class Circle {
      constructor(radius) {
        this.radius = radius
      }
      computeArea() { return Math.PI * this.radius * this.radius }
    }
    var c = new Circle(4)
    c.computeArea()
    // returns: 50.26548245743669

  // Getters and Setters
    class Circle {
      constructor(radius) {
        this.radius = radius
      }
      get area() { return Math.PI * this.radius * this.radius }
    }
    var c = new Circle(4)
    // returns: Circle {radius: 4}
    c.area
    // returns: 50.26548245743669

    // Redefined class
      class Circle {
        constructor(radius) {
          this._radius = radius
        }
        get area() { return Math.PI * this._radius * this._radius }
        set radius(r) { this._radius = r }
      }
      var c = new Circle(4)
      // returns: Circle {_radius: 4}
      c.area
      // returns: 50.26548245743669
      c.radius = 6
      c.area
      // returns: 113.09733552923255
  
  // Inheritance
    class Ellipse {
      constructor(width, height) {
        this._width = width;
        this._height = height;
      }
      get area() { return Math.PI * this._width * this._height; }
      set width(w) { this._width = w; }
      set height(h) { this._height = h; }
    }
    
    class Circle extends Ellipse {
      constructor(radius) {
        super(radius, radius);
      }
      set radius(r) { super.width = r; super.height = r; }
    }
    
    
    var c = new Circle(4) // create a circle
      c.radius = 2 // returns: Circle {_width: 4, _height: 4}
      c.area // c is now: Circle {_width: 2, _height: 2}
    // returns: 12.566370614359172
    c.radius = 5
    c.area
    // returns: 78.53981633974483

var person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
    myFunction : function() {return this;},
    fullName : function() {return this.firstName + " " + this.lastName;}
}; console.log(person.myFunction().id + ' ' + person.fullName());

var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
