let selectElement = (select) => document.querySelector(select);

function courseResponsible (course) {
    return DATABASE.teachers.filter(teacher => teacher.teacherId == course.courseResponsible).map(teacher => ` <p class="professor"> ${teacher.firstName} ${teacher.lastName} ${teacher.post} </p>`);
}

function courseTeachers (course) {

    course.forEach(courseTeacher => {
        
        DATABASE.teachers.forEach(teacher => {

            if (teacher.teacherId == courseTeacher) {
                selectElement(`div:last-child > .containerTeachers`).innerHTML += `<p class="course-teachers">
                        ${teacher.firstName} ${teacher.lastName}  (${teacher.post})
                    </p>`
            }
        })
    });
}


function studentsFromCourse (course, id) {

    let div = elementID(id.id);
    let studentBox = document.createElement("div");
    studentBox.classList.add("studentBox")
    
    let students = DATABASE.students.filter(student => student.courses.some(studentC => studentC.courseId == course.courseId));

    students.forEach(student => {
    
        let courseId = student.courses.filter(course => course.courseId == course.courseId);
    
        if (courseId[0].passedCredits == course.totalCredits) {
            studentBox.innerHTML += ` <div class="done">
                    <h4> ${student.firstName} ${student.lastName} </h4>
                    ${courseId[0].started.semester} ${courseId[0].started.year} ${courseId[0].passedCredits} credits
                </div> `
        } else {
            studentBox.innerHTML += ` <div class="notDone">
                    <h4> ${student.firstName} ${student.lastName} </h4>
                    ${courseId[0].started.semester} ${courseId[0].started.year} ${courseId[0].passedCredits} credits
                </div>`       
        }
    })
    div.append(studentBox);
}

