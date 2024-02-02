function calculateAge() {
    const today = new Date();
    const birthadateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthadateInput.split("-");
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1]-1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear,birthMonth,birthDay);

    console.log(birthadateInput);    
    console.log(birthdateParts);    
    console.log(birthDay);    
    console.log(birthMonth);    
    console.log(birthYear);   
    
    const isValidDate = (date) =>{
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)         );
    };
    if (!isValidDate(birthDate)) {
        alert("invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInseconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>
        <div class="result-item">
            <h3>Months Passsed:</h3>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passsed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Days Passsed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passsed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passsed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passsed:</h3>
            <p>${ageInseconds}</p>
        </div>
    `;


    resultContainer.style.display = "block";
}

const ageCalculatorform = document.getElementById("ageCalculator");
ageCalculatorform.addEventListener("submit",(event)=> {
    event.preventDefault();
    calculateAge();
});