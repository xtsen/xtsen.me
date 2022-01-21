function initPrices() {
    /**
     * This function is used to create the packages and after the detail of these packages below.
     */
    initPackages()
    initDetailPackages()
}
function inputMethodPrices(bool) {
    document.getElementById('inputMethodPrices').checked = bool
    if (bool === true) {
        initPackagesWordpress()
    }
    else {
        initPackages()
    }
}
function initPackages() {
    /**
     * InitPackages is used to create packages and append each package on the div with id packages
     */
    section = document.getElementById("packages")
    index = 0
    section.innerHTML = ""
    indexBenefit = 0
    Packages.forEach(package => {
        packageContainer = `
        <div class="package ${(package.title).toLowerCase()} js-scrollTo" href=".moreDetails" id="package${String(indexBenefit)}">
        <p class="titlePackage" id="titlePackage${String(indexBenefit)}">${package.title}</p>
        <p class="pricePackage" id="pricePackage${String(indexBenefit)}">${package.price}<span class="euroSign" id="euroSign${String(indexBenefit)}">€</span></p>
        <div class="benefits" id="benefits${String(indexBenefit)}">
        </div>
        </div>
        `
        section.innerHTML += packageContainer
        benefits = package.benefits
        benefits.forEach(benefit => {
            document.getElementById(`benefits${String(indexBenefit)}`).innerHTML += `<p class="benefit" id="${benefit}">${benefit}</p>`
        })
        
        index+=1
        indexBenefit += 1
    });
}
function initPackagesWordpress() {
    /**
     * InitPackages is used to create packages and append each package on the div with id packages
     */
    section = document.getElementById("packages")
    index = 0
    section.innerHTML = ""
    indexBenefit = 0
    Packages.forEach(package => {
        packageContainer = `
        <div class="package ${(package.title).toLowerCase()} js-scrollTo" href=".moreDetails" id="package${String(indexBenefit)}">
        <p class="titlePackage" id="titlePackage${String(indexBenefit)}">${package.title}</p>
        <p class="pricePackage" id="pricePackage${String(indexBenefit)}">${package.price-50*(index+1)}<span class="euroSign" id="euroSign${String(indexBenefit)}">€</span></p>
        <div class="benefits" id="benefits${String(indexBenefit)}">
        </div>
        </div>
        `
        section.innerHTML += packageContainer
        benefits = package.benefits
        benefits.forEach(benefit => {
            document.getElementById(`benefits${String(indexBenefit)}`).innerHTML += `<p class="benefit" id="${benefit}">${benefit}</p>`
        })
        
        index+=1
        indexBenefit += 1
    });
}
function initDetailPackages() {
    /**
     * initDetailPackages is used to create the div width details about each package and append them in the div with id moreDetails
     */
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