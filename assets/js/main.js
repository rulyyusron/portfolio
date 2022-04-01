const barMenu = document.getElementById("bar_menu");
const navbarMenu = document.getElementById("navbar__link");
const closeBtn = document.getElementById("close_btn");


barMenu.addEventListener("click", open_menu);
closeBtn.addEventListener("click", close_menu);

function open_menu() {
    navbarMenu.classList.add("active_link")
}

function close_menu() {
    navbarMenu.classList.remove("active_link");
}