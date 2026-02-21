window.onload = function() {

  const music = document.getElementById("bgMusic");
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const noBtn = document.getElementById("noBtn");

  // Музыканы бастау
  startBtn.addEventListener("click", () => {
    music.play();
    startScreen.style.display = "none";
  });

  // Жүректер шығару
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

  // Қатысамын батырмасына эффект
  const yesBtn = document.querySelector("a button");
  yesBtn.addEventListener("click", createHearts);

  // Қашатын батырма
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

}