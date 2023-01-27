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