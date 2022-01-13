const hamburger = document.getElementById("hamburger")
const navbar = document.querySelector(".navbar")

const link = document.querySelector(".link")

hamburger.addEventListener("click", function () {
    navbar.classList.toggle("nav")
    link.classList.toggle("linklar")
})
