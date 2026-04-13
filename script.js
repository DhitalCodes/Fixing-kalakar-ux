const viewModeButtons = document.querySelectorAll("[data-mode]");
const filterButtons = document.querySelectorAll("[data-filter]");
const separators = document.querySelectorAll(".divider");
const issueCount = document.getElementById("issueCount");
const issueItems = document.querySelectorAll(".issues li");

if (issueCount) {
  const label = issueItems.length === 1 ? "Issue" : "Issues";
  issueCount.textContent = `${issueItems.length} ${label} Found`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) return;
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

viewModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) return;

    viewModeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const isAfter = button.dataset.mode === "after";
    document.body.classList.toggle("fixed-state", isAfter);

    separators.forEach((node) => {
      node.textContent = isAfter ? "→" : ":";
    });
  });
});
