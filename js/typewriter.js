const loader = document.getElementById("loaderTypewrite")

/**
 * These few lines are used to create an effect of typing in real time 
 */
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
    .deleteChars(2)
    .typeString('dev')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('nesta')
    .pauseFor(500)
    .deleteChars(1)
    .typeString('x')
    .pauseFor(500)
    .deleteChars(5)
    .typeString('xtsen')
    .pauseFor(500)
    .typeString('.me')
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