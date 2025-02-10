function* colorGenerator() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * 16);
    color += "0123456789ABCDEF"[randomHex];
  }
  yield color;
}

document.getElementById("nextColorButton").addEventListener("click", () => {
  const colorGen = colorGenerator();
  const color = colorGen.next().value;
  document.getElementById("colorText").textContent = color;
  document.body.style.backgroundColor = color;
});
