let a = []

function likedPrograms () {

    // let storedLikedArray = JSON.parse(localStorage.getItem("likedArray"));

    let header = selectElement("header")

    let container = createElement("div");
    container.classList.add("container-hidden");
    container.innerHTML = "";
    container.id = "like-container";

    let likedBox = createElement("div");
    likedBox.classList.add("liked-item-box");

    // if (storedLikedArray == null) {
    //     storedLikedArray = [];
    // }

    if (a.length > 0) {
        container.innerHTML = `<h2> Mina favoriter </h2>`;

        a.forEach(program => {
            let like = createLike(program);
            let heart = createHeartLike(program, like);    

            like.appendChild(heart);
            likedBox.append(like);
            container.append(likedBox);
        });

    } else {
        let noLike = createElement("div");
        noLike.classList.add("no-likes");
        noLike.innerHTML = "<h2> Mina favoriter </h2> Du har inga sparade favoriter"
        container.append(noLike);
    }

    header.append(container)

}

function createLike (program) {
    let likedItem = createElement("div");
    likedItem.classList.add("liked-item");

    let info = createElement("div");
    info.innerHTML = ` <p class="bold"> ${program.name} <p class="liked-info"> ${getSubject(program)}, ${getCountry(program)}, ${DB.LEVELS[program.level]} </p>`
    info.addEventListener("click", function () {
        // popUpProgram();
    })
    likedItem.append(info);

    return likedItem
}

function createHeartLike (program, element) {
    let hearthItem = createElement("div");
    hearthItem.classList.add("liked-heart-div");
    hearthItem.innerHTML = `<i class="fa-solid fa-heart dark-heart"></i>`;

    hearthItem.addEventListener("click", function () {
        removeLike(program, element);
    });

    return hearthItem;
}

