const lines = document.querySelector(".lines")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links ul a")
lines.addEventListener("click", ()=>{
    navLinks.classList.toggle("open")
})

links.forEach((link) => {
    link.addEventListener("click", ()=> {
        navLinks.classList.remove("open")
    })
})