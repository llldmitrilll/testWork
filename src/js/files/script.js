// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const mblockShowMore = document.querySelector('.mblock__button');
const cardHiddens = document.querySelectorAll('.mblock__card--hidden');

mblockShowMore.addEventListener('click', function () {
   cardHiddens.forEach(function (card) {
      card.classList.toggle('mblock__card--hidden');
   })
});

// ====   form-title   ===========

const formElements = document.querySelectorAll('.form__element');

formElements.forEach(function (formElement) {
   formElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('title-element')) {
         e.target.classList.toggle('title-element--active')
         e.target.nextElementSibling.classList.toggle('form__body--hidden')
      }
   })

})

/*  собираем крллекцию кнопок БЛИЗКО К МЕТРО и слушаем 
нажатие, убираем checked с классов '.metro__check-top' 
и ставим '#metro__check-05'  */

const checkBoxAny = document.querySelector('#metro__check-05');
const metroCheckTops = document.querySelectorAll('.metro__check-top');

checkBoxAny.addEventListener('click', function () {
   if (checkBoxAny.checked) {
      metroCheckTops.forEach(function (metroCheckTop) {
         metroCheckTop.checked = false
      })
      checkBoxAny.checked = true
   }
})

// снимаем checked с кнопки ЛЮБАЯ

metroCheckTops.forEach(function (metroCheckTop) {
   metroCheckTop.addEventListener('click', function () {
      checkBoxAny.checked = false
   })
})

// убираем other__hidden и показываем три элемента

const otherHidden = document.querySelector('.other__hidden');
const otherBtnShow = document.querySelector('.other__show-more');

otherBtnShow.addEventListener('click', function () {
   otherHidden.classList.toggle('other__hidden');
   if (otherHidden.classList == 'other__hidden') {
      otherBtnShow.innerText = 'Показать ещё |>'
   } else {
      otherBtnShow.innerText = '<| Скрыть'
   }
})