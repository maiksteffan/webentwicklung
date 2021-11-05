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