function initBlog() {
    section = document.getElementById("articles")
    index = 0
    section.innerHTML = ""
    articles.forEach(article => {
        containerArticle = document.createElement("div")
        containerArticle.setAttribute("class", "article")
        containerArticle.setAttribute("id", "article" + String(index))
        document.getElementById("articles").appendChild(containerArticle)

        titleArticle = document.createElement("p")
        titleArticle.setAttribute("class", "titleArticle")
        titleArticle.setAttribute("id", "titleArticle" + String(index))
        document.getElementById("article" + String(index)).appendChild(titleArticle)
        document.getElementById("titleArticle" + String(index)).innerText = article.title

        contentArticle = document.createElement("p")
        contentArticle.setAttribute("class", "contentArticle")
        contentArticle.setAttribute("id", "contentArticle" + String(index))
        document.getElementById("article" + String(index)).appendChild(contentArticle)
        document.getElementById("contentArticle" + String(index)).innerText = article.content

        dateArticle = document.createElement("p")
        dateArticle.setAttribute("class", "dateArticle")
        dateArticle.setAttribute("id", "dateArticle" + String(index))
        document.getElementById("article" + String(index)).appendChild(dateArticle)
        document.getElementById("dateArticle" + String(index)).innerText = article.date

        index+=1
    });
}