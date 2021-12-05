function initPortfolio() {
    section = document.getElementById("containerPotfolio")
    index = 0
    section.innerHTML = ""
    indexBenefit = 0
    Websites.forEach(website => {
        
        containerWebsite = document.createElement("div")
        
        if (index % 2 == 0) {
            containerWebsite.setAttribute("class", `rowPortfolio`)
        }else {
            containerWebsite.setAttribute("class", `rowPortfolio rowInverted`)
        }

        containerWebsite.setAttribute("id", `rowPortfolio${String(index)}`)
        document.getElementById("containerPotfolio").appendChild(containerWebsite)

        containerImgWebsite = document.createElement("div")
        containerImgWebsite.setAttribute("class", `imagePortfolio`)
        containerImgWebsite.setAttribute("id", `imagePortfolio${String(index)}`)
        document.getElementById(`rowPortfolio${String(index)}`).appendChild(containerImgWebsite)

        imgWebsite = document.createElement("img")
        imgWebsite.setAttribute("class", `imageWebsitePortfolio`)
        imgWebsite.setAttribute("src", `./res/portfolio/${website.title}.webp`)
        imgWebsite.setAttribute("alt", `An image from the website ${website.title}`)
        document.getElementById(`imagePortfolio${String(index)}`).appendChild(imgWebsite)

        containerTextWebsite = document.createElement("div")
        containerTextWebsite.setAttribute("class", `textPortfolio`)
        containerTextWebsite.setAttribute("id", `textPortfolio${String(index)}`)
        document.getElementById(`rowPortfolio${String(index)}`).appendChild(containerTextWebsite)
        
        titleWebsite = document.createElement("h2")
        titleWebsite.setAttribute("id", "titleWebsite" + String(index))
        document.getElementById(`textPortfolio${String(index)}`).appendChild(titleWebsite)
        document.getElementById("titleWebsite" + String(index)).innerText = website.title
        
        descWebsite = document.createElement("p")
        descWebsite.setAttribute("id", "descWebsite" + String(index))
        document.getElementById(`textPortfolio${String(index)}`).appendChild(descWebsite)
        document.getElementById("descWebsite" + String(index)).innerText = website.desc

        index+=1
    });
}