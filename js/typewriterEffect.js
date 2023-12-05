// typewriterModule.js
// typewriter.js
function typewriterEffect(elementId, texts, speed) {
  const element = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].length) {
        element.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        setTimeout(erase, 1000);
      }
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, speed);
    }
  }

  type();
}
