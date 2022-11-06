let req = new Request("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");

function joke () {

    fetch(req)
        .then(r => r.json())
        .then(r => {
            console.log(r)
            document.querySelector("h3 > span").textContent = r.category;
            document.querySelector(".joke").textContent = r.joke;
        })
}

let btn = document.querySelector("button");
btn.addEventListener("click", joke);

