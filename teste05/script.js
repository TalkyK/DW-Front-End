const coin = document.getElementById("coin");
const themeToggle = document.getElementById("themeToggle");

coin.addEventListener("click", () => {
  coin.classList.toggle("flipped");
});

function goTo(mode) {
  if (mode === "rpg") {
    alert("Indo para criação de ficha RPG 🎲");
  } else {
    alert("Indo para ficha Story 📖");
  }
}

// atalhos teclado
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") goTo("rpg");
  if (e.key.toLowerCase() === "p") goTo("story");
});

// tema dark/light
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});