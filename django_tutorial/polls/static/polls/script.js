document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("bgButton");

  // list of backgrounds (put your real image paths in static/polls/images/)
  const backgrounds = {
    "winter": "/static/polls/images/pinney_sunset.jpg",
    "summer": "/static/polls/images/Antonio-Cardoso1.jpg",
    // "/static/polls/images/another_background.jpg"
  };

  // get the keys
  const keys = Object.keys(backgrounds);

  let current = 0;

  btn.addEventListener("click", () => {
    current = (current + 1) % keys.length;

    const key = keys[current];   // "winter", "summer", etc.
    const url = backgrounds[key];

    document.body.style.backgroundImage = `url('${url}')`;

    // button text is now the key
    btn.textContent = `Season: ${key}`;
  });

// initialize on page load
document.body.style.backgroundImage = `url('${backgrounds[current].url}')`;
btn.textContent = `Season: ${backgrounds[current].name}`;
});