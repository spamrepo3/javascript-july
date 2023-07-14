// Callback Chaining

// Callback chaining is a technique where multiple callbacks are executed in a sequence, one after another.

// Callback Chaining
function washClothes(callback) {
    console.log("Washing clothes...");
    setTimeout(callback, 2000);
  }
  function dryClothes() {
    console.log("Drying clothes...");
  }
  washClothes(dryClothes);