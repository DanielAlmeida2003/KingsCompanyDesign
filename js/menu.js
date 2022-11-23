
var menuMobile = document.querySelector('.mobile-menu');
var mainBox = document.querySelector(".centerred");


window.addEventListener("resize", ()=>{

    mainBox.style.display = "block";

    document.querySelector('#icon').classList.remove("fas", "fa-window-close");
    document.querySelector('#icon').classList.add('fa-solid', 'fa-bars');

    menuMobile.classList.remove('open');
    

});




function menuShow() {

    if (menuMobile.classList.contains('open')) {


        menuMobile.classList.remove('open');
        menuMobile.style.animation = "slide-down 0.5s forwards";

        document.querySelector('#icon').classList.remove("fas", "fa-window-close");
        document.querySelector('#icon').classList.add('fa-solid', 'fa-bars');
        
        mainBox.style.display = "block";
        
        
    } else {

        menuMobile.classList.add('open');

        document.querySelector('#icon').classList.remove('fa-solid', 'fa-bars');
        document.querySelector('#icon').classList.add("fas", "fa-window-close");

        mainBox.style.display = "none";

    }

}