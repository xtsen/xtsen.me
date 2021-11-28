function load() {
    setTimeout(() => {
        document.querySelector(".imgAbout").classList.remove('notLoaded')
        document.querySelector(".titleAbout").classList.remove('notLoaded')
        document.querySelector(".descAbout").classList.remove('notLoaded')
    }, 300);
}
function cookies() {
    document.querySelector("#errorNbCookies").style.display = "none";
    document.querySelector(".paypalContainer").style.display = "none";
    nbCookies = document.querySelector(".nbCookies").value
    document.getElementById("priceCookie").innerText = "= " + String(nbCookies*priceCookie) + "€"
}
function support() {
    nbCookies = document.querySelector(".nbCookies").value
    cancelButton = document.querySelector(".payCookies")
    if (nbCookies <= 0) {
        document.querySelector("#contentError").innerText = "Vous avez rentré un nombre de cookies insuffisant. 😔"
        document.querySelector("#errorNbCookies").style.display = "flex";
    }else {
        if (cancelButton.classList[1] == undefined) {
            document.querySelector(".payCookies").innerText = "Annuler ❌";
            document.querySelector(".payCookies").classList.add("cancelButton");
            document.querySelector(".paypalContainer").style.display = "flex";
        }else{
            document.querySelector(".paypalContainer").style.display = "none";
            document.querySelector(".payCookies").innerText = "Soutenir 🎁";
            document.querySelector(".payCookies").classList.remove("cancelButton");
        }
        
    }
}