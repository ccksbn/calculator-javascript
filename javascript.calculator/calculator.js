const inputField = document.getElementById("inputField");
const warningMessage = document.getElementById("warningMessage");

inputField.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow Backspace, Delete, Arrow keys, and other control keys
  if (
    key === "Backspace" ||
    key === "Delete" ||
    key === "ArrowLeft" ||
    key === "ArrowRight"
  ) {
    return; // Do nothing, allow the key press
  }

  // Check if the key is a letter (a-z or A-Z)
  if (/[a-zA-Z]/.test(key)) {
    // Display the warning message
    warningMessage.textContent =
      "Only numbers are valid! Please enter a number!";
    event.preventDefault(); // Prevent the character from being typed

    // Hides the warning message after 2.5 seconds
    setTimeout(() => {
      warningMessage.textContent = "";
    }, 3500);
  } else {
    // Clears the warning message if the input is valid
    warningMessage.textContent = "";
  }
});

