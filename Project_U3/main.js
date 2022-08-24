let elementID = (id) => document.getElementById(id);
let createElement = (element) => document.createElement(element);

elementID("input-name").addEventListener("keyup", searchName);
elementID("input-course").addEventListener("keyup", searchCourse);

function searchName () {
    let valueName = elementID("input-name").value;
    
    let container = elementID("container");
    container.innerHTML = ""

    if (valueName.length > 0) {
        
        elementID("input-course").value = "";    

        sortLastName();

        DATABASE.students.forEach(student => {

            if (student.lastName.toLocaleLowerCase().includes(valueName.toLocaleLowerCase())) {
                let studentDiv = createElement("div");
                studentDiv.classList.add("student");
                studentDiv.id = student.studentID;

                container.append(studentDiv);

                studentDiv.innerHTML += `<div class="name"> ${student.firstName} ${student.lastName} Total Credits: ${totalCredits(student.courses)}</div>
                    <h3> Courses </h3> 
                `
                studentCourses(student.courses, studentDiv);
            }
        });

        return valueName
    } 
}

function searchCourse () {
    let valueCourse = elementID("input-course").value;
    let container = elementID("container");
    container.innerHTML = "";

    if (valueCourse.length > 0) {   

        elementID("input-name").value = "";

        DATABASE.courses.forEach(course => {
            
            if (course.title.toLocaleLowerCase().includes(valueCourse.toLocaleLowerCase())) {
                let courseDiv = document.createElement("div");
                courseDiv.classList.add("coureDiv");
                courseDiv.id = course.courseId;

                container.append(courseDiv);

                courseDiv.innerHTML += `${course.title} (${course.totalCredits} credits)
                <div class="responsible"> <h4> Course responsible </h4> <h4> Teachers </h4> </div>
                <div class="containerTeachers">
                    ${courseResponsible(course)}
                </div>
                `

                courseTeachers(course.teachers);
                studentsFromCourse(course, courseDiv);
            }
        })
    }
    return valueCourse
}