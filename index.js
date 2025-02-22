const menuBtn = document.querySelector(".menus");
const menusItems = document.querySelector("#menu-items");
const closeMenu = document.querySelector("#close-menu");
const menus = document.querySelector(".menus");

let blurLimit = 30;
document.body.style.filter = `blur(${blurLimit}px)`

menuBtn.addEventListener("click", () => {
   menusItems.style.display = "block";
   menus.style.display = "none"
})

closeMenu.addEventListener("click", () => {
   menusItems.style.display = "none";
   menus.style.display = "block"
})

 setInterval(() => {
            if (blurLimit > 0) {
               blurLimit--;
               document.body.style.filter = `blur(${blurLimit}px)`
            }
          }, 80)

