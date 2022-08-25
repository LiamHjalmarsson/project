let input = document.querySelector("input");

input.addEventListener("keyup", function () {
    
    let value = input.value
    let textBox = document.getElementById("textBox");

    let palin = palindrome(value);

    if (palin == true) {
        textBox.style.color = "green"
        textBox.innerHTML = value;
    } else {
        textBox.style.color = "red"
        textBox.innerHTML = value;
    }


})

function palindrome(string) {
    return string == string.split("").reverse().join("");
}
