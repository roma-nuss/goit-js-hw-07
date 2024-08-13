function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  const boxSizeStep = 10;
  const initialSize = 30;

  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * boxSizeStep;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const input = document.querySelector("#controls input");

  createButton.addEventListener("click", () => {
    const value = parseInt(input.value, 10);

    if (value >= 1 && value <= 100) {
      createBoxes(value);
      input.value = "";
    } else {
      alert("Please enter a number between 1 and 100");
    }
  });

  destroyButton.addEventListener("click", () => {
    destroyBoxes();
  });
});
