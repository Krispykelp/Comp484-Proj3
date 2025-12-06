// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (for Task 10 using setInterval/clearInterval)
let flashingIntervalId = null;

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
const toggleButton = document.getElementById("toggle-button");
toggleButton.setAttribute("data-action", "status-toggle");

// Cache commonly used elements
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
function highlightListItems() {
  const listItems = document.querySelectorAll("#item-list li");
  listItems.forEach((item) => {
    item.style.color = "blue";
  });
}
highlightListItems();

/* ======================================= */
// --- Task 8: Dynamic Element Creation ---
function createTimestamp() {
  // 1. Create a new <span>
  const span = document.createElement("span");
  // 2. Set its inner HTML to the current time
  span.innerHTML = " " + new Date().toLocaleTimeString();
  // 3. Append it inside the status-output div
  statusOutput.appendChild(span);
}

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
function toggleStatus(e) {
  // Task 6: Prevent default anchor behavior
  e.preventDefault();

  // Toggle visibility of the status output
  statusOutput.classList.toggle("hidden");

  // Check if status is visible
  const isVisible = !statusOutput.classList.contains("hidden");

  if (isVisible) {
    // Task 7: Set background when visible
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: Add a timestamp whenever status becomes visible
    createTimestamp();
  } else {
    // Reset background when hidden
    mainTitle.style.backgroundColor = "";
  }
}

// Attach event listener for toggle button (Task 5)
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Now flashes the blue status box (status-output)
function startFlashing() {
  // Avoid creating multiple intervals
  if (flashingIntervalId !== null) return;

  flashingIntervalId = setInterval(() => {
    statusOutput.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  if (flashingIntervalId !== null) {
    clearInterval(flashingIntervalId);
    flashingIntervalId = null;

    // Make sure the status box is visible after stopping
    statusOutput.classList.remove("hidden");
  }
}

// Bind timer button events
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
