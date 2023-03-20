import calculate from "./calculete.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js";
import theme from "./theme.js";


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
});

document.getElementById("clear").addEventListener("click", handleClearButton)

document.getElementById('input').addEventListener("keydown", handleTyping)

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", theme)
