function initPortfolio() {
    section = document.getElementById("containerPotfolio")
    index = 0

    Websites.forEach(website => {
        const cardWebsite = `
            <div class="rowPortfolio ${index % 2 == 0 ? "rowInverted" : ""} {
                
            }}">
                <div class="imagePortfolio">
                    <img class="imageWebsitePortfolio" src="./res/portfolio/${website.title}.webp" alt="An image from the website ${website.title}"/>
                </div>
                <div class="textPortfolio"> 
                    <h2>${website.title}</h2>
                    <p>${website.desc}</p>
                </div>
            </div>
        `
        section.innerHTML += cardWebsite
        index += 1
    });
}