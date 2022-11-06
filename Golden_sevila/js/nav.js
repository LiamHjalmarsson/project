let array = [0]

function buildNav () {
    // let storedLikedArray = JSON.parse(localStorage.getItem("likedArray"));
    let header = selectElement("header");
    header.innerHTML = "";

    let nav = createElement("div");
    nav.id = "nav";

    let searchAndLike = createElement("div");
    searchAndLike.classList.add("search-like");
    
    nav.append(createBurger(), createLogo(), searchAndLike);
    searchAndLike.append(createSearch())

    // if (storedLikedArray == null) {
    //     storedLikedArray = []
    // }

    if (array.length > 0) {
        searchAndLike.append(createDarkHeart());   
    } else {
        searchAndLike.append(createLightHeart());
    }

    header.append(createItemsBurger());
    header.appendChild(nav);
}

// burger 
function createBurger () {
    let container = createElement("div");
    container.classList.add("hamburger");
    container.innerHTML = `<span class="line"></span> <span class="line"></span> <span class="line"></span>`

    container.addEventListener("click", function () {
        burgerOnClick(container)                                                                                                                                                                                                                                                                             
    });

    return container;
}

function burgerOnClick (container) {

    selectElement('.burger-container').classList.toggle('burger-hidden');

    container.classList.toggle(`active`);

    if (container.classList.contains(`active`)) {
      selectElement('main').style.opacity = '0.3'
    } else {
      selectElement('main').style.opacity = '1'
    } 
}

function createItemsBurger () {
    let burgerItems = [
        {
            text: "Utbytes Livet",
            url: "#",
        },
        {
            text: "Världsdelar och länder",
            url: "#",
        },
        {
            text: "Ämnen",
            url: "#",
        },
        {
            text: "Program",
            url: "#",
        },
        {
            text: "Om oss",
            url: "#",
        },
    ];

    let container = createElement("div");
    container.classList.add("burger-container", "burger-hidden");

    burgerItems.forEach(item => {
        let div = createElement("div");
        div.classList.add("burger-list");
        div.innerHTML = `<a href="${item.url}">${item.text} </a>`
        container.append(div);
    });

    return container
}

// logo
function createLogo () {
    let div = createElement("div");
    div.classList.add("title-name");
    div.innerHTML = `<a href ='#'><h2> STUDERIENCE </h2></a>`
    
    return div
}

// search 
function createSearch () {
    let search = createElement("div");
    search.classList.add("search");
    search.innerHTML = `<i class="fa-solid fa-magnifying-glass"> </i>`

    search.addEventListener("click", function () {
        searchOnClick(search);
    });

    return search;
}

function searchOnClick (search) {
    if (search.classList.contains("active")) {
        search.classList.remove(`active`);
        selectElement("main").style.opacity = "1";
        selectElement(".searchBarContainer").classList.remove("active");
        selectElement("#searchInputBar").value = "";
        empetyInfo(".search-result");
    } else {
        search.classList.add("active");
        selectElement("main").style.opacity = "0.3";
        selectElement(".searchBarContainer").classList.add("active");
    }
}

// no like & likes 
function createLightHeart () {
    let div = createElement("div");
    div.classList.add("my-likes");
    div.innerHTML = '<i class="fa-regular fa-heart"></i>'

    div.addEventListener("click", function () {
        changeClassOnLikeContainer(selectElement(""))
    });

    return div;
}

function createDarkHeart () {
    let div = createElement("div");
    div.classList.add("my-likes");
    div.innerHTML = '<i class="fa-solid fa-heart"> </i>'

    div.addEventListener("click", function () {
        changeClassOnLikeContainer()
    });

    return div;
}
