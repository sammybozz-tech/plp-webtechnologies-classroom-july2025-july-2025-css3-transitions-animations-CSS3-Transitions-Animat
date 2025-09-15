// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// A global variable
let globalCount = 0;

// A function with parameters and return values
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}

// A reusable function to trigger box animation
function animateBox() {
  const box = document.querySelector(".box");

  // Add the class (starts animation)
  box.classList.add("animate");

  // Remove the class after animation ends (so it can restart next time)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 2000);

  // Increase global count each time box animates
  globalCount++;
  console.log("Animation played " + globalCount + " times.");
}

// Event listener for button
document.getElementById("animateBtn").addEventListener("click", () => {
  let sum = addNumbers(2, 3); // call function with parameters
  console.log("2 + 3 = " + sum);
  animateBox(); // trigger box animation
});
