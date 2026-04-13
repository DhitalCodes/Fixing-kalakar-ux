const viewModeButtons = document.querySelectorAll("[data-mode]");
const separators = document.querySelectorAll(".divider");

viewModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) return;

    viewModeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const isAfter = button.dataset.mode === "after";
    document.body.classList.toggle("fixed", isAfter);

    separators.forEach((node) => {
      node.textContent = isAfter ? "→" : ":";
    });
  });
});
