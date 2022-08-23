let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let saved = [];

let elementID = (id) => document.getElementById(id);

//  arrow function to get the color 
let hexColor = () => {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += hexArray[randomNumber()];
    }

    return hex
}

// arrow function to get a random number of the hex array length 
let randomNumber = () => Math.floor(Math.random() * hexArray.length);

// bts random colors 
let btnBG = elementID("bg");
let btnColor = elementID("color");
let btnBorder = elementID("border");

// eventListeners to the bts to get the colors to the correct items 
btnBG.addEventListener("click", function () {
    let hex = hexColor();
    let box = elementID("box");
    let infoBox = elementID("span-bg");

    box.style.backgroundColor = hex;
    infoBox.innerHTML = hex;
});

btnColor.addEventListener("click", function () {
    let hex = hexColor();
    let text = elementID("text");
    let infoText = elementID("span-text");

    text.style.color = hex;
    infoText.innerHTML = hex;
});

btnBorder.addEventListener("click", function () {
    let hex = hexColor();
    let box = elementID("box");
    let infoBorder = elementID("span-border");

    box.style.border = `2px solid ${hex}`;
    infoBorder.innerHTML = hex;
});

//bts save 
let saveBG = elementID("save-bg");
let saveColor = elementID("save-text");
let saveBorder = elementID("save-border");

saveBG.addEventListener("click", function () {
    elementID("saved-info-bg").append(savedBG());
    addSaved(info);
});

function addSaved (save) {
    saved.push(save)
}

function savedBG () {
    let box = elementID("saved-bg");

    let p = document.createElement("p");
    let info = elementID("span-bg").outerText;
    p.textContent = info;

    let btn = document.createElement("button");
    btn.classList.add("close");
    btn.textContent = "X";

    box.append(p);
    p.append(btn);

    return box;
}


