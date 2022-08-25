let input = document.querySelector("input");

input.addEventListener("keyup", function () {
    
    let value = input.value
    let letters = document.querySelector(".letters");
    letters.textContent = value.length

    let word = document.querySelector(".words");
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

    console.log(words); 

    if (words) {
        word.textContent = words.length
    } else {
        word.textContent = 0
    }
})

