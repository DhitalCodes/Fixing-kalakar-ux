const viewModeButtons = document.querySelectorAll("[data-mode]");

viewModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewModeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const isAfter = button.dataset.mode === "after";
    document.body.classList.toggle("fixed", isAfter);

    const separators = document.querySelectorAll(".divider");
    separators.forEach((node) => {
      node.textContent = isAfter ? "→" : ":";
    });
  });
});
