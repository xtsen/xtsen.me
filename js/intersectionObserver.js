/**
 * These objects from IntersectionObserver library are used to show elements when a certain ratio 
 */
let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    if (observable.intersectionRatio > 0.6) {
      observable.target.classList.remove('not-visible')
      observer.unobserve(observable.target)
    } else {
        // observable.target.classList.add('not-visible')
    }
  })
  }, {
    threshold: [0.6]
});

let observerReduceImg = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.95) {
      entry.target.classList.remove('notreduced')
      observerBackground.unobserve(entry.target)
    } else {
        // entry.target.classList.add('notpassed')
    }
  })
  }, {
    threshold: [0.8]
});

let observerBackground = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.1) {
      entry.target.classList.remove('notpassed')
      observerBackground.unobserve(entry.target)
    } else {
        // entry.target.classList.add('notpassed')
    }
  })
  }, {
    threshold: [0.1]
});

let observerPie = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.95) {
      let pies = document.querySelectorAll('.sc-percentage')
      pies.forEach(pie => {
        pie.classList.remove('notpassed')
      });
      observerPie.unobserve(entry.target)
    } else {
        // entry.target.classList.add('notpassed')
    }
  })
  }, {
    threshold: [0.95]
});
let observerTariffs = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.7) {
      entry.target.classList.remove('notSeen')
      observerTariffs.unobserve(entry.target)
    } else {
        // entry.target.classList.add('notpassed')
    }
  })
  }, {
    threshold: [0.7]
});



let mainTitlesSection = document.querySelectorAll('.mainTitleSection')
mainTitlesSection.forEach(function (mainTitleSection) {
  mainTitleSection.classList.add('not-visible')
  observer.observe(mainTitleSection)
})

let images = document.querySelectorAll('.imageQuality')
images.forEach(function (image) {
  image.classList.add('not-visible')
  observer.observe(image)
})
let texts = document.querySelectorAll('.textQuality')
texts.forEach(function (text) {
  text.classList.add('not-visible')
  observer.observe(text)
})
let transitions = document.querySelectorAll('.transition')
transitions.forEach(transition => {
  transition.classList.add('notreduced')
  observerReduceImg.observe(transition)
});
let backgroundPortfolios = document.querySelectorAll('.portfolio')
backgroundPortfolios.forEach(backgroundPortfolio => {
  backgroundPortfolio.classList.add('notpassed')
  observerBackground.observe(backgroundPortfolio)
});
let portfolios = document.querySelectorAll('.rowPortfolio')
portfolios.forEach(function (portfolio) {
    portfolio.classList.add('not-visible')
    observer.observe(portfolio)
})
let backgroundPerfomances = document.querySelectorAll('.performance')
backgroundPerfomances.forEach(backgroundPerfomance => {
  backgroundPerfomance.classList.add('notpassed')
  observerBackground.observe(backgroundPerfomance)
});
let percentages = document.querySelectorAll('.sc-percentage')
percentages.forEach(pie => {
  pie.classList.add('notpassed')
  observerPie.observe(pie)
});
let pies = document.querySelectorAll('.sc-gauge')
pies.forEach(pie => {
  observerPie.observe(pie)
});

// Prices 
let tariffs = document.querySelectorAll('.details')
tariffs.forEach(function (tariff) {
    tariff.classList.add('notSeen')
    observerTariffs.observe(tariff)
})
