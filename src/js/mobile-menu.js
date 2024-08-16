let menu = document.getElementById("menu")
let show = document.getElementById("show")
let hide = document.getElementById("hide")

show.addEventListener("click", () => {
    menu.style.display = "block"
})

hide.addEventListener("click", () => {
    menu.style.display = "none"
})