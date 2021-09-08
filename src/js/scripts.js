////////////////////////slider////

$('.slider').slick({
  arrows:true,
  dots:true,
  autoplay: true,
  infinite: true,
  adaptiveHeight: true,
  easing: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed:1000,
  pauseOnFocus:true,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        arrows: false,
      
      }
    }
  ]
});



////////////////////////////////// icon scrollup
let wHeight = window.innerHeight;
window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})


let sectionHight = 0
for (let link of document.getElementsByClassName('nav_link')){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id_section = this.getAttribute('href') //#section
        let pos = document.querySelector(id_section).getBoundingClientRect();
        window.scrollTo({
        top: document.querySelector(id_section).offsetTop - 110,
        left: 0,
        behavior: 'smooth'
    });
    })
}



window.addEventListener('scroll', function(e) {
    let blocks = document.querySelectorAll('.block')
    for (let block of blocks){
    let pos = block.getBoundingClientRect()
    let posTop = pos.top
    let posHeight = pos.height
    if (posTop < wHeight - posHeight && posTop > - posHeight){
        block.classList.add('anim')
    }
   else {
    block.classList.remove('anim')
}
    }

})
///////////burger///////

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

////////////////////////animation///
var button = document.querySelector(".form__btn");

button.onmousemove = (e) => {
   var x = e.pageX - e.target.offsetLeft;
   var y = e.pageY - e.target.offsetTop;

   button.style.setProperty("--x", x + "px");
   button.style.setProperty("--y", y + "px");
};

