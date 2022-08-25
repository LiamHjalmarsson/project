function getaverageAge () {
    let sum = 0;

    db.forEach(person => sum += person.age);

    return Math.round(sum / db.length);
}

function ageAverageGender (m, f) {
    
    let sum = 0; 
    let genderCount = 0;

    db.forEach(person => {
        if (person.gender == m || person.gender == f) {
            sum += person.age
            genderCount++
        }
    });
    
    return Math.round(sum / genderCount);
}

function updateAverage () {
    let average = document.getElementById("average");
    let averageMen = document.getElementById("averageMen");
    let averageWomen = document.getElementById("averageWomen");

    average.innerHTML = "";
    averageMen.innerHTML = "";
    averageWomen.innerHTML = "";

    for (let i = 0; i < db.length; i++) {
        average.innerHTML = `The average age is: ${getaverageAge()}`;
        averageMen.innerHTML = `The average male age is: ${ageAverageGender("Male", "male")}`;
        averageWomen.innerHTML = ` The average female age is: ${ageAverageGender("Female", "female")}`;
    }
}



