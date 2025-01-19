const menuBtn = document.querySelector(".menus");
const menusItems = document.querySelector("#menu-items");
const closeMenu = document.querySelector("#close-menu");


menuBtn.addEventListener("click", () => {
   menusItems.style.display = "block";
})

closeMenu.addEventListener("click", () => {
   menusItems.style.display = "none";
})