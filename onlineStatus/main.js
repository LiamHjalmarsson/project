let selectElement = (select) => document.querySelector(select)
let div = selectElement("div");

if (navigator.onLine) {
    div.innerHTML = "You are Online"
    div.classList.remove("offline");
    div.classList.add("online");
} else {
    div.innerHTML = "You are Offline"
    div.classList.remove("online");
    div.classList.add("offline");
}

window.addEventListener("online", function () {
    div.innerHTML = "You are Online"
    div.classList.remove("offline");
    div.classList.add("online");
})

window.addEventListener("offline", function () {
    div.innerHTML = "You are Offline"
    div.classList.remove("online");
    div.classList.add("offline");
})