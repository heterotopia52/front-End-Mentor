let navIcon = document.querySelector(".burger-icon");
let navMenu = document.querySelector(".menu");


navIcon.addEventListener('click',toggle);

function toggle(){
    navMenu.classList.toggle("toggle");
}