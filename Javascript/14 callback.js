// Callback
// A callback is a function that is passed as an argument to another function and is invoked when a certain event occurs.

// Callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  greet("John", sayGoodbye);
  