function getPersonByName (name) {
    return db.filter(person => person.firstName.toLowerCase().includes(name.toLowerCase()));
}

function getPersonByLast (last) {
    return db.filter(person => person.lastName.toLowerCase().includes(last.toLowerCase()));
}

function getPersonByGender (gender) {
    return db.filter(person => person.gender.toLowerCase() == gender.toLowerCase())
}

function getPersonByAge (age) {
    return db.filter(person => person.age== age);
}

function getPersonByBest (best) {
    return db.filter(person => person.best.toLowerCase().includes(best.toLowerCase()));
}

function getPersonByWorst (worst) {
    return db.filter(person => person.worst.toLowerCase().includes(worst.toLowerCase()));
}

function filterName (event) {
    event.preventDefault();
    let name = document.getElementById("filter-name").value;

    resetFilters();
    renderPersons(getPersonByName(name));
}

function filterLast (event) {
    event.preventDefault();

    let last = document.getElementById("filter-last").value;
    
    resetFilters();
    renderPersons(getPersonByLast(last))
}

function filterGender (event) {
    event.preventDefault();
    let gender = document.getElementById("filter-gender").value;

    resetFilters();
    renderPersons(getPersonByGender(gender));
}

function filterAge (event) {
    event.preventDefault();

    let age = parseInt(document.getElementById("filter-age").value);

    resetFilters();
    renderPersons(getPersonByAge(age));
}

function filterBest (event) {
    event.preventDefault();

    let best = document.getElementById("filter-best").value;

    resetFilters();
    renderPersons(getPersonByBest(best));
}

function filterWorst (event) {
    event.preventDefault();

    let worst = document.getElementById("filter-worst").value;

    resetFilters();
    renderPersons(getPersonByWorst(worst));
}

function resetFilters () {
    document.getElementById("filter-name").value = "";
    document.getElementById("filter-last").value = "";
    document.getElementById("filter-gender").value = "";
    document.getElementById("filter-age").value = "";
    document.getElementById("filter-best").value = "";
    document.getElementById("filter-worst").value = "";
}

function showAll () {
    resetFilters();
    renderPersons(db);
}

function filterHandelers () {

    let formName = document.getElementById("form-name"); 
    formName.addEventListener("submit", filterName);

    let formLast = document.getElementById("form-last");
    formLast.addEventListener("submit", filterLast);

    let formGender = document.getElementById("form-gender");
    formGender.addEventListener("submit", filterGender);

    let formAge = document.getElementById("form-age");
    formAge.addEventListener("submit", filterAge);

    let formBest = document.getElementById("form-best");
    formBest.addEventListener("submit", filterBest);
    
    let formWorst = document.getElementById("form-worst");
    formWorst.addEventListener("submit", filterWorst);

    let showAllBtn = document.getElementById("show-all");
    showAllBtn.addEventListener("click", showAll);

}

// filterHandelers();