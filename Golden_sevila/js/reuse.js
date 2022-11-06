// arrow functions to reuse on diffrent js files
let selectElement = (select) => document.querySelector(select);

let elementId = (id) => document.getElementById(id);

let selectAll = (all) => document.querySelectorAll(all);

let empetyInfo = (empety) => selectElement(empety).innerHTML = "";

let createElement = (create) => document.createElement(create);

// functions reuse 
function changeClassOnLikeContainer (element) {
    if (element.classList.contains('container-hidden')) {
      element.classList.remove('container-hidden')
      document.querySelector('main').style.opacity = '0.1'
    } else {
      element.classList.add('container-hidden')
      document.querySelector('main').style.opacity = '1'
    }
  }