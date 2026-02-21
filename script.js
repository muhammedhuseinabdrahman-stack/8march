document.addEventListener("DOMContentLoaded", function() {

  const music = document.getElementById("bgMusic");
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  // Музыка бастау
  startBtn.addEventListener("click", function() {
    music.play().then(() => {
      startScreen.style.display = "none";
    }).catch(err => {
      console.log("Музыка қателігі:", err);
    });
  });

  // Жүрек анимация
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

  yesBtn.addEventListener("click", createHearts);

  // Қашатын батырма
  noBtn.addEventListener("mousemove", function() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

});