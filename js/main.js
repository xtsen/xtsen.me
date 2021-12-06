function goThere(where) {
    /**
     * @param {string} where name of the target page ( where you want to go )
     * @return {none} return nothing just do a window.location.href
    */

    window.location.href = `./${where}.html`
}
function load() {
    /**
     * This function is used to display the loader and launch function depending on which page you are.
     */
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == "index.html") {
        document.querySelector("#bigTitle").innerText = nameWebsite
        initPortfolio()
    }
    document.title = nameWebsite;

    if (firstLoaderDone == "true") {
        setTimeout(showPage, 2000);
    }else {
        setTimeout(showPage, 5000)
    }
    
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
    /**
     * This function just display the page and hide the loader
     */
    document.getElementById("loader").style.display = "none";
    document.getElementById("toLoad").style.display = "flex";
}
