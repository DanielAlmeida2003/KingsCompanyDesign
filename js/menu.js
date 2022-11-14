function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');
    let mainBox = document.querySelector(".centerred");

    if (menuMobile.classList.contains('open')) {


        menuMobile.classList.remove('open');
        mainBox.style.display = "block";
        document.querySelector('.icon').src = "./img/svg/menu_white_36dp.svg";
        
    } else {

        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/svg/close_white_36dp.svg";
        mainBox.style.display = "none";

    }

}