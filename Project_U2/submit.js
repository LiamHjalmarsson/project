function addSubmitPerson (event) {
    event.preventDefault();

    let firstName = document.getElementById("add-name").value;
    let lastName = document.getElementById("add-last").value;
    let gender = document.getElementById("add-gender").value;
    let age = parseInt(document.getElementById("add-age").value);
    let best = document.getElementById("add-best").value;
    let worst = document.getElementById("add-worst").value;

    let person = new CreatePerson(firstName, lastName, gender, age, best, worst);

    console.log(person)
    if (db.length !== 0) {
        person.id = db[db.length - 1].id + 1;
    } else {
        person.id = 0
    } 

    if (firstName == "") {
        alert("you did not enter a name");
    } else if ( lastName == "") {
        alert("you did not enter a lastname");
    } else if (gender == "") {
        alert("you did not enter a gender");
    } else if (age == "") {
        alert("you did not enter a age");
    } else if (best == "") {
        alert("you did not enter a best");
    } else if (worst == "") {
        alert("you did not enter a worst");
    } else {
        addToDb(person);
        renderPersons(db);
        updateAverage();
    }

    let form = document.getElementById("add-form");
    form.reset();
}

function addPersonButton () {
    let addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addSubmitPerson)
}
