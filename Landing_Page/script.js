const btn_mobile = document.querySelector("#mobile-menu-button")

function toogleMenu() {
    const nav = document.querySelector(".list")
    nav.classList.toggle("active")
    btn_mobile.classList.toggle("click")
}
btn_mobile.addEventListener("click", toogleMenu)