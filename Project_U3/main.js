let elementID = (id) => document.getElementById(id);
let createElement = (element) => document.createElement(element);

elementID("input-name").addEventListener("keyup", search);

function search () {
    let searchValue = elementID("input-name").value;

    if (searchValue.length > 0) {

        let container = elementID("container");
        container.innerHTML = ""
        
        DATABASE.students.forEach(student => {

            if(student.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                let studentDiv = createElement("div");
                studentDiv.classList.add("student");
                container.append(studentDiv);

                studentDiv.innerHTML += `<div class="name"> ${student.firstName} ${student.lastName} Total Credits: ${totalCredits(student.courses)}</div>
                    <div> </div>
                `
            }

        })

    }

    return searchValue
}

function totalCredits (student) {
    let sum = 0; 

    student.forEach(credit => sum += credit.passedCredits);

    return sum
}