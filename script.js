const modeButtons = document.querySelectorAll("[data-mode]");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const isAfter = button.dataset.mode === "after";
    document.body.classList.toggle("fixed", isAfter);

    const separators = document.querySelectorAll(".divider");
    separators.forEach((node) => {
      node.textContent = isAfter ? "" : ":";
    });
  });
});
