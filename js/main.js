function goThere(where) {
    window.location.href = `./${where}.html`
}
function load() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == "index.html") {
        document.querySelector("#bigTitle").innerText = nameWebsite
    }
    document.title = nameWebsite;
    setTimeout(showPage, 4000);

    if (page == "prices.html") {
        initPrices()
    }
    if (page == "blog.html") {
        initBlog()
    }
    if (page == "about.html") {
        animAbout()
    }
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("toLoad").style.display = "flex";
}