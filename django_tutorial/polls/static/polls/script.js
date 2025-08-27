document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("bgButton");
  const menu = btn.nextElementSibling;

  // Set background on page load from localStorage
  const savedBg = localStorage.getItem("background");
  if (savedBg) {
    document.body.style.backgroundImage = `url('${savedBg}')`;
  }

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  });

  menu.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const bgUrl = li.dataset.bg;
      document.body.style.backgroundImage = `url('${bgUrl}')`;
      localStorage.setItem("background", bgUrl); // store selection
      menu.style.display = "none";
    });
  });
});