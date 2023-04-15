// var nname = prompt("Як до вас звертатися?");

// if (nname) {
//     localStorage.setItem("visitorName", nname);
//     document.getElementById("name-visitor").innerHTML = "Привіт, " + nname + "!";
// } else {
//     localStorage.setItem("visitorName", "Гість");
//     document.getElementById("name-visitor").innerHTML = "Привіт, Гість!";
// }





let userName = prompt("Як вас звати?");

if (userName) {
    localStorage.setItem("visitorName", userName);
    document.getElementById("name-visitor").innerHTML = "Привіт, " + userName + "!";
} else {
    localStorage.setItem("visitorName", "Гість");
    document.getElementById("name-visitor").innerHTML = "Привіт, Гість";
}


