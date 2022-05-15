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



















                        //УРОК 33
 /* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики       



// 'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//   //Код ниже сработает только тогда, когда DOM-структура будет загружена
//   const movieDB = {
//     movies: [
//       'Логан',
//       'Лига справедливости',
//       'Ла-ла лэнд',
//       'Одержимость',
//       'Скотт Пилигрим против...',
//     ],
//   };

//   const adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector('.promo__bg'),
//     genre = poster.querySelector('.promo__genre'),
//     movieList = document.querySelector('.promo__interactive-list'),
//     //1)
//     addForm = document.querySelector('form.add'),
//     addInput = addForm.querySelector('.adding__input'), //Ввод польз.
//     checkbox = addForm.querySelector('[type="checkbox"]'); //Галочка

//   addForm.addEventListener('submit', (event) => {
//     event.preventDefault(); //Отмена нормального поведения стр.
//     let newFilm = addInput.value; //ввод в Input ("Что уже посмотрено...?")
//     const favorite = checkbox.checked; //checked - получить булиновое значение true or false

//     if (newFilm) {
//       //if создан для того, чтобы ввод в базу данных был только тогда, когда в Input что-то ввели, а не оставили пустую строку

//       if (newFilm.length > 21) {
//         newFilm = `${newFilm.substring(0, 22)}...`; //Заменяем старую строчку новой!
//       } //2)

//       if (favorite) {
//         //   console.log("Добавляем любимый фильм"); 
//           alert("Добавляем любимый фильм");
//       }//4)

//       movieDB.movies.push(newFilm); //Добавляем ввод польз. в наш список movieDB
//       // movieDB.movies.sort();
//       sortArr(movieDB.movies);

//       createMovieList(movieDB.movies, movieList); //Создание новых элементов
//     }

//     // addForm.reset();
//     event.target.reset(); //Очистка формы
//   });

//   const deleteAdv = (arr) => {
//     adv.forEach((item) => {
//       item.remove();
//     });
//   };

//   const makeChanges = () => {
//     genre.textContent = 'Драма';
//     poster.style.backgroundImage = 'url("img/bg.jpg")';
//   };

//   const sortArr = (arr) => {
//     arr.sort();
//   };

//   function createMovieList(films, parent) {
//     //Чтобы сделать независимую ф-ю, добавляем аргументы (films, parent) и заменяем ими подвязки movieList и movieDB.movies
//     // movieList.innerHTML = '';
//     parent.innerHTML = '';
//     sortArr(films);

//     // movieDB.movies.forEach((film, i)
//     films.forEach((film, i) => {
//       //   movieList.innerHTML +=
//       parent.innerHTML += `
//           <li class="promo__interactive-item">${i + 1} ${film}
//                  <div class="delete"></div>
//           </li>
//           `;
//     });

//     //3)
//     document.querySelectorAll('.delete').forEach((btn, i) => {
//         btn.addEventListener('click', () => {
//             btn.parentElement.remove();//Удалить со страницы
//             movieDB.movies.splice(i, 1);//Удалить из базы данных. splice - вырезает определённый элемент с массива. 1й аргумент - номер, с которого нужно начать, 2й - сколько элементов нужно удалить! 
//             createMovieList(films, parent);//При удалении элемента, список перестраивается заново и нумерация обновляется.  
//         });
//     });
//   }
//   deleteAdv(adv);
//   makeChanges();
//   createMovieList(movieDB.movies, movieList);
// });


    //...............ЧИСТЫЙ КОД

    // 'use strict';

    // document.addEventListener('DOMContentLoaded', () => {
    //   const movieDB = {
    //     movies: [
    //       'Логан',
    //       'Лига справедливости',
    //       'Ла-ла лэнд',
    //       'Одержимость',
    //       'Скотт Пилигрим против...',
    //     ],
    //   };
    
    //   const adv = document.querySelectorAll('.promo__adv img'),
    //     poster = document.querySelector('.promo__bg'),
    //     genre = poster.querySelector('.promo__genre'),
    //     movieList = document.querySelector('.promo__interactive-list'),
    //     addForm = document.querySelector('form.add'),
    //     addInput = addForm.querySelector('.adding__input'), 
    //     checkbox = addForm.querySelector('[type="checkbox"]'); 
    
    //   addForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     let newFilm = addInput.value;
    //     const favorite = checkbox.checked;
    
    //     if (newFilm) {
          
    //       if (newFilm.length > 21) {
    //         newFilm = `${newFilm.substring(0, 22)}...`; 
    //       }
    
    //       if (favorite) {
    //           console.log("Добавляем любимый фильм"); 
    //       }
    
    //       movieDB.movies.push(newFilm); 
    //       sortArr(movieDB.movies);
    
    //       createMovieList(movieDB.movies, movieList); 
    //     }
    //     event.target.reset(); 
    //   });
    
    //   const deleteAdv = (arr) => {
    //     adv.forEach((item) => {
    //       item.remove();
    //     });
    //   };
    
    //   const makeChanges = () => {
    //     genre.textContent = 'Драма';
    //     poster.style.backgroundImage = 'url("img/bg.jpg")';
    //   };
    
    //   const sortArr = (arr) => {
    //     arr.sort();
    //   };
    
    //   function createMovieList(films, parent) {
    //     parent.innerHTML = '';
    //     sortArr(films);
    
    //     films.forEach((film, i) => {
    //       parent.innerHTML += `
    //           <li class="promo__interactive-item">${i + 1} ${film}
    //                  <div class="delete"></div>
    //           </li>
    //           `;
    //     });
    
    //     document.querySelectorAll('.delete').forEach((btn, i) => {
    //         btn.addEventListener('click', () => {
    //             btn.parentElement.remove();
    //             movieDB.movies.splice(i, 1);
    //             createMovieList(films, parent);
    //         });
    //     });
    //   }
    //   deleteAdv(adv);
    //   makeChanges();
    //   createMovieList(movieDB.movies, movieList);
    // });
//...................................................................















