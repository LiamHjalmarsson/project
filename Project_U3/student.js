function totalCredits (student) {
    let sum = 0; 

    student.forEach(credit => sum += credit.passedCredits);

    return sum
}

function sortLastName () {
    DATABASE.students.sort((a, b) => {
        if (a.lastName > b.lastName) {  
            return 1
        } else if (a.lastName < b.lastName) {
            return -1
        } else {
            return 0
        }
    });
}

function studentCourses (student, id) {
    let div = elementID(id.id);
    let personBox = document.createElement("div");
    personBox.classList.add("courses");

    student.forEach(studentCourse => {

        DATABASE.courses.forEach(course => {

            if (studentCourse.courseId == course.courseId) {
                
                let coursePerson = createElement("div");
                coursePerson.classList.add("course")
                personBox.append(coursePerson);

                if (studentCourse.passedCredits == course.totalCredits) {
                    coursePerson.innerHTML += `<div class="done">
                        ${course.title}
                        ${studentCourse.started.semester} ${studentCourse.started.year} credits ${studentCourse.passedCredits} of ${course.totalCredits} 
                    </div>`
                } else {
                    coursePerson.innerHTML += `<div class="notDone">
                        ${course.title}
                        ${studentCourse.started.semester} ${studentCourse.started.year} credits ${studentCourse.passedCredits} of ${course.totalCredits} </div>`
                }

            }

        });

    });

    div.append(personBox);
}