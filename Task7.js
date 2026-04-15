const output = document.getElementById("output");

function print(msg) {
  console.log(msg);
  output.innerHTML += msg + "<br>";
}

function clearOutput() {
  output.innerHTML = "";
}


// 🔹 Task 1: Order System (setTimeout)
function startOrder() {
  clearOutput();

  setTimeout(() => {
    print("Order placed");
  }, 0);

  setTimeout(() => {
    print("Preparing food");
  }, 2000);

  setTimeout(() => {
    print("Food ready");
  }, 4000);

  setTimeout(() => {
    print("Delivered");
  }, 5000);
}


// 🔹 Task 2: Digital Clock (setInterval)
function startClock() {
  clearOutput();

  let count = 0;

  const interval = setInterval(() => {
    const now = new Date().toLocaleTimeString();
    print(now);

    count++;

    if (count === 10) {
      clearInterval(interval);
      print("Clock stopped");
    }
  }, 1000);
}


// 🔹 Task 3: Callback Hell Simulation
function loginUser(callback) {
  setTimeout(() => {
    print("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    print("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts(callback) {
  setTimeout(() => {
    print("User Posts Fetched");
    callback();
  }, 1000);
}

function startCallbackHell() {
  clearOutput();

  loginUser(() => {
    getUserData(() => {
      getUserPosts(() => {
        print("All Done ✅");
      });
    });
  });
}


// 🔹 Task 4: Fake API Promise
function getProducts() {
  return new Promise((resolve, reject) => {
    const success = true; // change to false to test error

    setTimeout(() => {
      if (success) {
        resolve([
          { name: "Shirt", price: 500 },
          { name: "Shoes", price: 1500 },
          { name: "Watch", price: 2000 }
        ]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

function startPromise() {
  clearOutput();

  getProducts()
    .then(products => {
      print("Products Loaded:");
      products.forEach(p => {
        print(`${p.name} - ₹${p.price}`);
      });
    })
    .catch(err => {
      print(err);
    })
    .finally(() => {
      print("Request Finished");
    });
}