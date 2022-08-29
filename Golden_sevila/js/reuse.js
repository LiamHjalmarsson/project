// arrow functions to reuse on diffrent js files
let selectElement = (select) => document.querySelector(select);

let elementId = (id) => document.getElementById(id);

let selectAll = (all) => document.querySelectorAll(all);

let empetyInfo = (empety) => selectElement(empety).innerHTML = "";

let createElement = (create) => document.createElement(create);