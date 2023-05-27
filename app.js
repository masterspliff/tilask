/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`
    },
    { duration: 3000, fill: "forwards" }
  );
};

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screens = document.querySelectorAll(".screen");

screens.forEach(screen => {
  const name = screen.querySelector(".name");
  
  screen.onmouseenter = event => {  
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return name.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= name.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 6;
    }, 15);
  };
});
