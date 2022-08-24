let darkMode = localStorage.getItem("key");

let button = selectElement("button");
let body = document.body;

function enableDarkMode () {
    body.classList.add("darkTheme");
    button.innerHTML = "Dark mode"
    localStorage.setItem("key", "darkMode");
}

function disableDarkMode () {
    body.classList.remove("darkTheme");
    button.innerHTML = "Light mode"
    localStorage.setItem("key", null);
}

if (darkMode === "darkMode") {
    enableDarkMode();
}

button.addEventListener("click", function () {
    darkMode = localStorage.getItem("key");

    if (darkMode !== "darkMode") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
