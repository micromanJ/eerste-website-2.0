function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const flexContainers = document.querySelectorAll(".flex-container");
  flexContainers.forEach((container) => {
    container.classList.toggle("dark-mode-container");
  });
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}
