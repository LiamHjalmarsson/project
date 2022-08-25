function removePersonById (id) {
    let personId = db.findIndex(person => person.id == id);

    db.forEach(person => {

        if (person.id == id) {
            
            let confirmRemove = confirm(`Do you want to remove ${person.firstName}`);

            if (confirmRemove == true) {
                db.splice(personId, 1);

                for (let i = person.id ; i < db.length; i++) {
                   console.log(db[i].id -= 1);
                }

                renderPersons(db);
                updateAverage();
            }
        }
    });
}


function onClickRemove (event) {
    let button = event.target;
    let id = button.parentElement.id;

    removePersonById(id)
}

function removePersonHandelere () {
    let buttons = document.querySelectorAll(".remove");

    buttons.forEach(button => button.addEventListener("click", onClickRemove))
}