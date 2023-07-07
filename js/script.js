const changeModeBtn = document.getElementById("toggleTheme");

// Dark Mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("darkMode");
  changeModeBtn.innerHTML = '<i class="far fa-sun"></i>';
} else {
  document.body.classList.remove("darkMode");
  changeModeBtn.innerHTML = '<i class="far fa-moon"></i>';
}

changeModeBtn.addEventListener("click", () => {
  if (localStorage.getItem("darkMode") !== null) {
    if (localStorage.getItem("darkMode") === "disabled") {
      localStorage.setItem("darkMode", "enabled");
      document.body.classList.add("darkMode");
      changeModeBtn.innerHTML = '<i class="far fa-sun"></i>';
    } else {
      localStorage.setItem("darkMode", "disabled");
      document.body.classList.remove("darkMode");
      changeModeBtn.innerHTML = '<i class="far fa-moon"></i>';
    }
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
