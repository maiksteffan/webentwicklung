let count = 0;
function validate(){
    const USERNAME_STAFF = "staff";
    const PASSWORD_STAFF = "staff";
    const USERNAME_ADMIN = "admin";
    const PASSWORD_ADMIN = "admin";
    let userName = document.getElementById("userName").value;
    let userPassword = document.getElementById("password").value;
    if(userName===USERNAME_STAFF && userPassword===PASSWORD_STAFF){
        window.location.href = "staffPage.html";
    }
    if(userName===USERNAME_ADMIN && userPassword===PASSWORD_ADMIN){
        window.location.href = "adminPage.html";
    }
    count++;
    if(count >= 3){
        document.getElementById("errorMessage").innerText = "du hast 3 mal Falsch gelegen!";
        document.getElementById("submit").disabled = true;
    }
}

function check(){
    let string = document.getElementById("password").value;
    let hasLower = false;
    let hasUpper = false;
    let hasNum = false;
    let hasSpecial = false;
    let hasEightChars = false;

    let counter = 0;
    hasLower = /[a-z]/.test(string);
    hasUpper = /[A-Z]/.test(string);
    hasNum = /[0-9]/.test(string);
    hasSpecial = /[.!@#$%^&*()_+=]/.test(string);
    hasEightChars = string.length>=8;
    let strength = [hasLower, hasUpper, hasNum, hasSpecial, hasEightChars];

    strength.map( (s) => {
        if(s){
            counter++;
            console.log(counter);
        }
    });
    switch(counter){
        case 0: document.getElementById("strength").innerText = "super super weak!";
            break;
        case 1: document.getElementById("strength").innerText = "super weak!";
            break;
        case 2: document.getElementById("strength").innerText = "weak!";
            break;
        case 3: document.getElementById("strength").innerText = "ok!";
            break;
        case 4: document.getElementById("strength").innerText = "medium!";
            break;
        case 5: document.getElementById("strength").innerText = "strong!";
            break;
    }

}