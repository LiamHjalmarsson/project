function searchBar () {

    let container = createElement("div");
    container.classList.add("searchBarContainer");
    selectElement("header").append(container);

    let searchBar = createElement("div");
    searchBar.classList.add("searchbar");
    searchBar.innerHTML = `<form autocomplete="off" class="searchfieldBox">
            <div class="fa-solid fa-magnifying-glass iconSearch"></div>
            <input type="search" id="searchInputBar" placeholder="Ämne, stad eller land...">
            <div class="fa-solid fa-xmark iconCross"></div>
        </form>`

    let containerResult = createElement("div");
    containerResult.classList.add("search-result");

    container.append(searchBar, containerResult);
}

function closeSearch () {
    selectElement(".iconCross").addEventListener("click", function () {
        let search = selectElement(".search");
        search.classList.remove("active");

        selectElement('.search').innerHTML = `<i class="fa-solid fa-magnifying-glass"> </i>`
        selectElement('.searchBarContainer').classList.remove('active')
        selectElement('#searchInputBar').value = ''
        selectElement('main').style.opacity = '1'    
    });
}

function searching () {
    let value = selectElement("#searchInputBar").value

    let countrys = DB.COUNTRIES;
    let fields = DB.FIELDS;
    let cityies = DB.CITIES;

    empetyInfo(".search-result")
    
    if (value.length > 0) {
        
        sortSearch(countrys)
        
        countrys.forEach(country => {
            if (country.name.toLowerCase().includes(value.toLowerCase())) {
                selectElement(".search-result").innerHTML += `<a href=#"> 
                <div class="result-box"> 
                    <h4 class="titleInfoSearch"> ${country.name} </h4> 
                    <div class="textInfoSearch">${country.text}</div>
                </div></a>`
            }
        });

        sortSearch(fields)

        fields.forEach(field => {
            if (field.name.toLowerCase().includes(value.toLowerCase())) {
                selectElement('.search-result').innerHTML += `<a href="#"> 
                <div class="result-box"> 
                    <h4 class="titleInfoSearch"> ${field.name} </h4> 
                    <div class="textInfoSearch">${field.text}</div>
                </div></a>`
            }
        });

        sortSearch(cityies)
        
        cityies.forEach(city => {
            if (city.name.toLowerCase().includes(value.toLowerCase())) {
                selectElement('.search-result').innerHTML += `<a href="#">
                <div class="result-box"> 
                    <h4 class="titleInfoSearch"> ${city.name} </h4> 
                    <div class="textInfoSearch">${city.text}</div>
                </div></a>`
            }
        })
    }
}

function sortSearch(typ) {
    typ.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    })
}
