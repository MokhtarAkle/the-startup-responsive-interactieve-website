let scrollPos = 0;
let firstImage = document.querySelector(".first-load");
let secondImage = document.querySelector(".second-load");
let footerShow = document.querySelector("footer");

document.addEventListener("scroll", (event) => {
    scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos > 250){
        firstImage.style.transform = "translate(0)"
        firstImage.style.opacity = "1";
    }
    if(scrollPos > 1850){
        secondImage.style.transform = "translate(0)"
        secondImage.style.opacity = "1";
    }

})