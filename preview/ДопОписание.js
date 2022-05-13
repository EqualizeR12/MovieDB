                //031 События и их обработчики (папка preview)
//несколько способов ОБРАБОТЧИКОВ СОБЫТИЙ: 

//1) Написание прямо в HTML: 
//<button onclick="alert('click')" id="btn">Нажми меня</button>
// !!! НЕ ПРИМЕНЯТЬ !!!

//2) Способ дом-дерево 🤔
// const btn = document.querySelector('button');

// btn.onclick = () => {
//     alert('click');
// };
// btn.onclick = () => {
//     alert('Second click');
// };
// Тоже почти не исп-ся!!!! Т.к. есть проблема: если повторять код, он просто перезаписывает предыдущий!!! Плюс, если нам он уже не нужен, мы не сможем его удалить в коде!!!

//3)
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     alert('click');
// });//click

// btn.addEventListener('click', () => {
//     alert('Second click');
// });//click, затем Second click! Первый НЕ ПЕРЕЗАПИСЫВАЕТСЯ!!

// btn.addEventListener('mouseenter', (e) => {//mouseenter - наведение указателем мыши
//         console.log(e);
//         console.log('hover');
//     });
//event(e, ev и т.д.) - событие, кот. описывает, что происходит с элементом; передаётся как аргумент () в ф-ю 
    //...............

// const btn = document.querySelector('button');

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);//Позволяет нам работать с элементом👇
//     e.target.remove();//При наведении на кнопку, она пропадёт! Так же и с 'click'
// });
    //................

    //Чтобы иметь возможность удалить эту ф-ю, её необходимо вынести в отдельную переменную!!
// const btn = document.querySelector('button');

// let i = 0;
// const deleteElement = (e) => {
//         console.log(e.target);
//         i++;
//         if (i = 1) {
//             btn.removeEventListener('click', deleteElement);//Удаляем прослушиватель событий
//         }
//     };

// btn.addEventListener('click', deleteElement);
    //..................

//Всплытие событий: изнутри -> наверх!
// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// const deleteElement = (e) => {
//         console.log(e.currentTarget);
//         console.log(e.type);
//     };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
    //..................

    //Отмена стандартного поведения браузера - preventDefault!!! Писать в самом начале обработчика событий, затем писать, что ему делать после этого!
// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });
    //...................

    //Чтобы присвоить один прослушиватель нескольким событиям!👇
// const btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');

// const deleteElement = (e) => {
//                 console.log(e.target);
//                 console.log(e.type);
// };
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });
    //..................

    //ОПЦИИ ОБРАБОТЧИКА СОБЫТИЙ!!!!(3й аргумент)

// const btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');
    
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     };
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});//{once: true} - вместо btn.removeEventListener 😎. Упрощает написание кода!
//     });
//.....................................................................


                    //

