const changeButtonTheme = document.getElementById("theme-button")

const body = document.querySelector("body")

const themeButtonImg = document.querySelector(".img-button")

changeButtonTheme.addEventListener("click", () => {

    const darkModeActive = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode")

    if (darkModeActive) {
        themeButtonImg.setAttribute("src", "./src/imagens/sun.png")
    } else {
        themeButtonImg.setAttribute("src", "./src/imagens/moon.png")
    }
})