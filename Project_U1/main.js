let selectElement = (select) => document.querySelector(select);

selectElement("button").addEventListener("click", function () {
    let rows = parseInt(selectElement("#input-rows").value);
    let cols = parseInt(selectElement("#input-cols").value);

    gridMaker("#container", rows, cols)
});

function gridMaker (container, rows, cols) {
    let grid = selectElement(container);
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    grid.innerHTML = "";

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols; j++) {

            grid.append(createDiv());
        
        } 
    }
}

function createDiv () {
    let div = document.createElement("div");
    div.classList.add("number")
    div.innerHTML = randomNumber();

    div.addEventListener("click", function () {
        div.classList.toggle("selected");
        infoUpdate("selected");
    });

    return div
}

function randomNumber () {
    return Math.floor(Math.random() * 100); 
}

function infoUpdate (selected) {

    let arrayOfNumber = getArrayOfSelectedNumbers(selected);

    selectElement(".pressed").innerHTML = arrayOfNumber.join(", ");
    selectElement(".length").innerHTML = arrayOfNumber.length;
    selectElement(".total").innerHTML = adder(arrayOfNumber); 
    selectElement(".average").innerHTML = average(arrayOfNumber); 
} 


function getArrayOfSelectedNumbers (className) {

    let elementsArray = Array.from(document.querySelectorAll("." + className));
  
    let arrayNumbers = [];

    elementsArray.forEach(element => {
        let number = parseInt(element.innerHTML);
        arrayNumbers.push(number)
    })
  
    return arrayNumbers;
}

function adder (array) {
    let sum = 0; 

    array.forEach(number => sum += number);

    return sum
}

function average (array) {
    return roundString(adder(array) / array.length, 1);
}

function roundString(numberWithDecimals, decimals) {
    let round = Math.pow(10, decimals);
    return (Math.round(numberWithDecimals * round) / round).toFixed(decimals);
}


gridMaker("#container", parseInt(selectElement("#input-rows").value), parseInt(selectElement("#input-cols").value));