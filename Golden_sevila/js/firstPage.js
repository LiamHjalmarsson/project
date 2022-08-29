// button listener scroll to country imgs
selectElement("#scroll-down").addEventListener("click", function () {
    selectElement("#img-slide-container").scrollIntoView({behavior: "smooth"});
});

function buildImgCountry () {
    let imgBox = createElement("div");
    imgBox.id  = "img-box"
    selectElement("#img-slide-container").append(imgBox);

    DB.COUNTRIES.forEach(country => {
        let img = createElement("div"); 
        img.classList.add("img-slide");
        img.style.backgroundImage = `url(../db/Images/${getCountry(country)}_normal_2.jpg)`
        imgBox.append(img);

        let button = createElement("button");
        button.classList.add("img-slide-button");
        button.innerHTML = `<a href="../html_files/country.html?country=${findCountry(country).id}">${findCountry(country).name}</a>`
        img.append(button);
    });
}

function findCountry (country) {
    return DB.COUNTRIES.filter(countrie => countrie.id == country.id)[0];
}

function getCountry (country) {
    return findCountry(country).name.split(" ").join("_").toLowerCase();
}

function buildImgFiled () {
    let imgBox = createElement("div"); 
    imgBox.id = "imgFields-box"; 
    selectElement("#img-slideFields-container").append(imgBox);

    DB.FIELDS.forEach(field => {
        let img = createElement("div");
        img.classList.add("img-slide");
        img.style.backgroundImage = `url(../db/Images/field_pictures/${getFiled(field)}.jpg)`
        imgBox.append(img);

        let button = createElement("button");
        button.classList.add("img-slide-button");
        button.innerHTML = ` <a href="#">${findFiled(field).name}</a>`
        img.append(button);
    });

}

function findFiled (filedId) {
    return DB.FIELDS.filter(field => field.id == filedId.id)[0];
}

function getFiled (filedId) {
    return findFiled(filedId).name.toLowerCase();
}

buildImgCountry();
buildImgFiled();