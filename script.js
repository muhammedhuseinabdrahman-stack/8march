function showMessage() {
  alert("Сізді мерекеде күтеміз! 💐");
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Қашатын батырма 😄
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});