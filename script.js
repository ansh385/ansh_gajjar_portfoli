// Typing animation
const typing = document.querySelector(".typing");
if (typing) {
  const words = JSON.parse(typing.getAttribute("data-text"));
  let wordIndex = 0, charIndex = 0, currentWord = "", isDeleting = false;

  function type() {
    currentWord = words[wordIndex];
    if (!isDeleting) {
      typing.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typing.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 80 : 120);
  }
  type();
}

// Flipbook init
if (document.getElementById("flipbook")) {
  $("#flipbook").turn({
    width: 800,
    height: 500,
    autoCenter: true,
    elevation: 50,
    gradients: true,
    duration: 1200
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") $("#flipbook").turn("next");
    if (e.key === "ArrowLeft") $("#flipbook").turn("previous");
  });
}

