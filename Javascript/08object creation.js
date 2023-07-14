// Object Creation
// Objects are created using constructor functions or object literals to encapsulate data and behavior.

// Object Creation
var person = {
    name: "John",
    age: 25,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  person.greet();