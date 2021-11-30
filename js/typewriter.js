const loader = document.getElementById("loaderTypewrite")

firstLoaderDone = window.localStorage.getItem("firstLoaderDone")
if (firstLoaderDone == "true") {
    new Typewriter(loader, {
        autoStart: true,
        loop: true
    })
    .changeDeleteSpeed(50)
    .changeDelay(50)
    
    .typeString(nameWebsite)
    .pauseFor(3000)
    .start()
}

if (firstLoaderDone == null || firstLoaderDone == "false") {
    new Typewriter(loader, {
        autoStart: true,
        loop: true
    })
    .changeDeleteSpeed(50)
    .changeDelay(50)
    
    .pauseFor(500)
    .typeString('xtsen.web')
    .pauseFor(500)
    .deleteChars(4)
    .typeString('.me')
    .pauseFor(3000)
    .start()
    window.localStorage.setItem("firstLoaderDone", "true")
}
