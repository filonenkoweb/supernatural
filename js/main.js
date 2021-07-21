"use strict";

//tabs

/*

//html tab data for btn = data-tab-path
//html tab data for content = data-tab-target 



const tabBtns = document.querySelectorAll('.btn')
const tabs = document.querySelectorAll('.content')

tabBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        const tabBtnPath = e.currentTarget.getAttribute('data-tab-path')
        
        tabs.forEach(el => {
            el.classList.remove('active')
        })
        tabBtns.forEach(el => {
            el.classList.remove('active')
        })

        document.querySelector(`[data-tab-target = "${tabBtnPath}"]`).classList.add('active')
        el.classList.add('active')
    })
});

*/
//
// accordion

/*
const accordionBtns = document.querySelectorAll('.page__button')

if(accordionBtns){
  for(let accordionBtn of accordionBtns){
    accordionBtn.addEventListener('click', () => {
      //Переменные
      const accordionContent = accordionBtn.nextElementSibling
      
      //Добавление классов

      accordionBtn.classList.toggle('active')

      if(accordionContent.style.height == accordionContent.scrollHeight + 'px'){
        accordionContent.style.height = "0"
      }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
      }
    })
  }
}
  
*/
//burger
var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__main');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
} //


var header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }
  });
}

var sliderSeries = document.querySelector('.series__swiper');

if (sliderSeries) {
  new Swiper('.series__swiper', {
    navigation: {
      nextEl: ".series__next",
      prevEl: ".series__prev"
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      420: {
        slidesPerView: 1.5
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1.5
      },
      850: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 3
      }
    }
  });
}
//# sourceMappingURL=main.js.map
