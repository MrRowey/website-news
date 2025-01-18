document.addEventListener("DOMContentLoaded", () => {
  // Find all copy buttons
  const buttons = document.querySelectorAll(".copy-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the associated text to copy
      const textToCopy = this.getAttribute("data-clipboard-text");

      // Use the Clipboard API
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Flash the button green
          this.classList.add("show-msg");

          // Remove the class after the animation ends
          setTimeout(() => {
            this.classList.remove("show-msg");
          }, 1000); // Match the animation duration
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    });
  });
});
