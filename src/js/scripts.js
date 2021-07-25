///////////burger///////

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('nav ul li a');

burger.addEventListener('click', e => menu.classList.toggle('open'));
closeBtn.addEventListener('click', e => menu.classList.remove('open'));
[...links].forEach(link => link.addEventListener('click', e => menu.classList.remove('open')));

//////////////////////accordion////////

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

////////////////////////animation///
var button = document.querySelector(".form-btn__main");

button.onmousemove = (e) => {
   var x = e.pageX - e.target.offsetLeft;
   var y = e.pageY - e.target.offsetTop;

   button.style.setProperty("--x", x + "px");
   button.style.setProperty("--y", y + "px");
};


////////////////////////slider////

$('.home-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
////////////////////////

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/////////////////////
let modal2 = document.getElementById("Modal2");
let btn2 = document.getElementById("Link");
let span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

////////////////////////////////// icon scrollup

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})
/////////////////////////scroll sections

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


////////////////////////////////// icon scrollup

// let upBtn = document.getElementById ('scrollup');
// window.addEventListener('scroll', function(){
//     if (wHeight < window.scrollY){
//         upBtn.classList.add('scrollup_active')
//     }
//     else {
//         upBtn.classList.remove('scrollup_active')

//     }
// })

let wHeight = window.innerHeight;
window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

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