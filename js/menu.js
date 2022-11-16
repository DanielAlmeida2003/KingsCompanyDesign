
var menuMobile = document.querySelector('.mobile-menu');
var mainBox = document.querySelector(".centerred");


window.addEventListener("resize", ()=>{

    mainBox.style.display = "block";
    document.querySelector('.icon').src = "./img/svg/menu_white_36dp.svg";

    menuMobile.classList.remove('open');
    

});




function menuShow() {

    if (menuMobile.classList.contains('open')) {


        menuMobile.classList.remove('open');
        menuMobile.style.animation = "slide-down 0.5s forwards";
        document.querySelector('.icon').src = "./img/svg/menu_white_36dp.svg";
        
        mainBox.style.display = "block";
        
        
    } else {

        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/svg/close_white_36dp.svg";
        mainBox.style.display = "none";

    }

}