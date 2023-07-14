// Async Await, Promise

// Async/await and Promises are features in JavaScript used for handling asynchronous operations and managing the flow of execution.

function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  }
  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  getData();