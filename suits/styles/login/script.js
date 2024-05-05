function verif() {
    let usr = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (usr != "" && pass != "") {
        window.location.href="index.html";
    }
    else{
        alert("Username or password not valid !");
    }
}