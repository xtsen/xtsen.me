function intiPrices() {
    initPackages()
    initDetailPackages()
}
function initPackages() {
    section = document.getElementById("packages")
    index = 0
    section.innerHTML = ""
    indexBenefit = 0
    Packages.forEach(package => {
        
        containerPackage = document.createElement("div")
        containerPackage.setAttribute("class", `package ${(package.title).toLowerCase()} js-scrollTo`)
        containerPackage.setAttribute("href", ".moreDetails")
        containerPackage.setAttribute("id", "package" + String(index))
        document.getElementById("packages").appendChild(containerPackage)
        
        titlePackage = document.createElement("p")
        titlePackage.setAttribute("class", "titlePackage")
        titlePackage.setAttribute("id", "titlePackage" + String(index))
        document.getElementById("package" + String(index)).appendChild(titlePackage)
        document.getElementById("titlePackage" + String(index)).innerText = package.title
        
        pricePackage = document.createElement("p")
        pricePackage.setAttribute("class", "pricePackage")
        pricePackage.setAttribute("id", "pricePackage" + String(index))
        document.getElementById("package" + String(index)).appendChild(pricePackage)
        document.getElementById("pricePackage" + String(index)).innerText = package.price
        
        spanPricePackage = document.createElement("span")
        spanPricePackage.setAttribute("class", "euroSign")
        spanPricePackage.setAttribute("id", "euroSign" + String(index))
        document.getElementById("pricePackage" + String(index)).appendChild(spanPricePackage)
        document.getElementById("euroSign" + String(index)).innerText = "€"
        
        containerBenefitPackage = document.createElement("div")
        containerBenefitPackage.setAttribute("class", `benefits`)
        containerBenefitPackage.setAttribute("id", "benefits" + String(index))
        document.getElementById("package" + String(index)).appendChild(containerBenefitPackage)
        
        Benefits = package.benefits
        Benefits.forEach(benefit => {
            benefitPackage = document.createElement("p")
            benefitPackage.setAttribute("class", "benefit")
            benefitPackage.setAttribute("id", "benefitPackage" + String(indexBenefit))
            document.getElementById("benefits" + String(index)).appendChild(benefitPackage)
            document.getElementById("benefitPackage" + String(indexBenefit)).innerText = benefit
            indexBenefit += 1
        });

        index+=1
    });
}
function initDetailPackages() {
    section = document.getElementById("moreDetails")
    index = 0
    section.innerHTML = ""
    indexBenefit = 0
    Packages.forEach(package => {
        
        containerPackage = document.createElement("div")
        containerPackage.setAttribute("class", `details ${(package.title).toLowerCase()}Details`)
        containerPackage.setAttribute("id", "details" + String(index))
        document.getElementById("moreDetails").appendChild(containerPackage)
        
        titlePackageDetails = document.createElement("p")
        titlePackageDetails.setAttribute("class", "titlePackageDetails")
        titlePackageDetails.setAttribute("id", "titlePackageDetails" + String(index))
        document.getElementById("details" + String(index)).appendChild(titlePackageDetails)
        document.getElementById("titlePackageDetails" + String(index)).innerText = package.title
        
        descPackage = document.createElement("p")
        descPackage.setAttribute("class", "descPackage")
        descPackage.setAttribute("id", "descPackage" + String(index))
        document.getElementById("details" + String(index)).appendChild(descPackage)
        document.getElementById("descPackage" + String(index)).innerText = package.desc
        
        listBenefitPackage = document.createElement("ul")
        listBenefitPackage.setAttribute("class", `detailsPackage`)
        listBenefitPackage.setAttribute("id", "detailsPackage" + String(index))
        document.getElementById("details" + String(index)).appendChild(listBenefitPackage)

        titleListBenefitsPackage = document.createElement("li")
        titleListBenefitsPackage.setAttribute("class", "titleDetail")
        titleListBenefitsPackage.setAttribute("id", "titleDetail" + String(index))
        document.getElementById("detailsPackage" + String(index)).appendChild(titleListBenefitsPackage)
        document.getElementById("titleDetail" + String(index)).innerText = "Avantages avec ce pack :"
        
        Benefits = package.benefits
        Benefits.forEach(benefit => {
            benefitPackage = document.createElement("li")
            benefitPackage.setAttribute("class", "detailPackage")
            benefitPackage.setAttribute("id", "detailPackage" + String(indexBenefit))
            document.getElementById("detailsPackage" + String(index)).appendChild(benefitPackage)
            document.getElementById("detailPackage" + String(indexBenefit)).innerText = benefit
            indexBenefit += 1
        });

        index+=1
    });
}