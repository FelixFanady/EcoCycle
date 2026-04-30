(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    const loginError = document.getElementById("loginError");
    if (loginError && error) {
      loginError.textContent = error;
      loginError.hidden = false;
    }

    const registerError = document.getElementById("registerError");
    if (registerError && error) {
      registerError.textContent = error;
      registerError.hidden = false;
    }

    // Word Swap Animation
    initWordSwap();
  });

  function initWordSwap() {
    const wordSwapElement = document.querySelector(".word-swap");
    if (!wordSwapElement) return;

    const words = wordSwapElement.dataset.words.split(",");
    let currentWordIndex = 0;
    let isTyping = false;

    const typingSpeed = 120; // ms per character
    const deletingSpeed = 80; // ms per character
    const pauseTime = 2000; // pause before deleting

    async function typeWord(word) {
      isTyping = true;
      wordSwapElement.classList.add("typing");
      wordSwapElement.classList.remove("deleting");
      let displayedText = "";

      // Type character by character
      for (let i = 0; i < word.length; i++) {
        displayedText += word[i];
        wordSwapElement.textContent = displayedText;
        await sleep(typingSpeed);
      }

      // Pause before deleting
      await sleep(pauseTime);
    }

    async function deleteWord() {
      wordSwapElement.classList.add("deleting");
      wordSwapElement.classList.remove("typing");
      let displayedText = wordSwapElement.textContent;

      // Delete character by character
      while (displayedText.length > 0) {
        displayedText = displayedText.slice(0, -1);
        wordSwapElement.textContent = displayedText;
        await sleep(deletingSpeed);
      }
    }

    async function cycle() {
      while (true) {
        const currentWord = words[currentWordIndex];
        await typeWord(currentWord);
        await deleteWord();
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // Start the typing animation
    cycle();
  }
})();
