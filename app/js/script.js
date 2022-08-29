const mobileBtn = document.querySelector("#mobileBtn");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeElements = document.querySelectorAll(".has-fade");

mobileBtn.addEventListener('click', function(){

    if(header.classList.contains('open')){
        body.classList.remove('no-scroll');
        header.classList.remove('open'); //close mobile menu

        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }else{ // open mobile menu
        body.classList.add('no-scroll');
        header.classList.add('open');

        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
  
});