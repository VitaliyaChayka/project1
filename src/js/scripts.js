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



///////////burger///////

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.nav__link').click(function(event) {
      $('.header__burger, .nav').removeClass('active');
      $('body').removeClass('lock');
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

