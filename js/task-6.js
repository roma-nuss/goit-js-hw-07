const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const numberOfBoxes = Number(inputNumber.value);

  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  const boxes = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
