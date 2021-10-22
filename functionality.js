function fetchPage(num){
    switch(num){
        case(0):
            fetch("./pictures.html")
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    document.getElementById("article").innerHTML = data;
                });
            break;
        case(1):
            fetch("./about_me.html")
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    document.getElementById("article").innerHTML = data;
                });
            break;
        case(2):
            fetch("./my_project.html")
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    document.getElementById("article").innerHTML = data;
                });
            break;
    }
}