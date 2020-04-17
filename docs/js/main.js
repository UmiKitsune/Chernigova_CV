var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left'
  },
  breakpoints: {
    // when window width is >= 540px
    820: {
      slidesPerView: 2,
    },
  }

});

let openList = document.getElementById('open');
let closeList = document.getElementById("close");
let list = document.getElementsByClassName('list')[0];

openList.addEventListener("click", open, false);
closeList.addEventListener("click", close, false);

function open() {
  list.style.display = "block";
  openList.style.display = "none";
  closeList.style.display = "block";
};

function close() {
  list.style.display = "none";
  closeList.style.display = "none";
  openList.style.display = "block";
}

//КНОПКА НАВЕРХ------------------------------

jQuery(document).ready(function () {

  var btn = $('.btn_Up');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '900');
  });


});

// открываем и закрываем меню под гамбургером
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');
let link = document.querySelector('.menu-list');
let body = document.querySelector('body')

function changeClass() {
  menuBtn.classList.toggle('menu-btn-active');
  menu.classList.toggle('header-active');

}

function clickOnBody(e) {
  let target = e.target;

  if (target.classList.value != 'menu-btn menu-btn-active') {

    if (target.classList.length > 3) {
      return
    } else {
      menuBtn.classList.remove('menu-btn-active');
      menu.classList.remove('header-active');
    }
  }
}

menuBtn.addEventListener('click', changeClass);
//link.addEventListener('click', changeClass);

body.addEventListener('click', clickOnBody);
