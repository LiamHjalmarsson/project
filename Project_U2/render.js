function renderPerson (person) {
    let personBox = document.createElement("div");
    personBox.classList.add("person");
    personBox.id = person.id;

    personBox.innerHTML = ` ${person.firstName} 
        <p>${person.lastName}</p> <p> ${person.gender} </p> <p>${person.age}</p> <p>${person.best}</p> <p>${person.worst}</p>
        <button class="remove"> Remove </button>
    `

    return personBox

}

function renderPersons (db) {
    
    let container = document.getElementById("container");

    container.innerHTML = "";

    db.forEach(person => {
        container.append(renderPerson(person))
    });

    removePersonHandelere()

}

