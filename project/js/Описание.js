                    //УРОК 30
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//   movies: [
//     'Логан',
//     'Лига справедливости',
//     'Ла-ла лэнд',
//     'Одержимость',
//     'Скотт Пилигрим против...',
//   ],
// };

// //1)
// //Моё решение 😂
// // const promoAdv = document.getElementsByClassName('promo__adv');
// // promoAdv[0].remove();
// //Решение
// const adv = document.querySelectorAll('.promo__adv img'),
//   poster = document.querySelector('.promo__bg') /*Для 3)*/,
//   genre = poster.querySelector('.promo__genre') /*Для 2)*/,
//   movieList = document.querySelector('.promo__interactive-list'); /*Для 4)*/

// adv.forEach((item) => {
//   item.remove();
// });

// //2)
// genre.textContent = 'Драма';

// //3)
// poster.style.backgroundImage = 'url("img/bg.jpg")';

// //4)
// movieList.innerHTML = ''; //Очистка

// movieDB.movies.sort();

// // console.log(poster.innerHTML);//Получение элементов со страницы! Не для задания!!!

// //4 и 5)
// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${film}
//            <div class="delete"></div>
//     </li>
//     `;
// });

// // a = a + 1;
// // a += 1;// Одинаковые значения
//.....................................................................


                        //031 События и их обработчики (папка preview)
