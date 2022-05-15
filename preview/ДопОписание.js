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


                    //034 События на мобильных устройствах

//touchstart - срабатывает при возникновении касания к этому элементу
//touchmove - движение пальца по элементу
//touchend - вып-ся, когда палец оторвался от элемента
//touchenter - ведя пальцем по экрану, попадаем на элемент на кот. повешено это событие
//touchleave - ведя пальцем по экрану, уходим за пределы элемента на кот. повешено это событие
//touchcancel - палец вышел за пределы, н-р, браузера

// window.addEventListener('DOMContentLoaded', () => {
//     const overlay = document.querySelector('.overlay');

//     overlay.addEventListener('touchstart', (e) => {
//         e.preventDefault();//Советуется всегда ставить отмену стандартного поведения браузера
//         console.log('Start');
//         console.log(e.touches);//TouchList {0: Touch, length: 1}
//         console.log(e.targetTouches);
//     });

//     overlay.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//         console.log('Move');
//         console.log(e.changedTouches[0].pageX);//С помощью этого можно задать границы, выходя за которые буде что-то переключаться, н-р, слайд!
//     });

//     overlay.addEventListener('touchend', (e) => {
//         e.preventDefault();
//         console.log('End');
//     });
// });


//touches - список всех пальцев, кот. взаимодействуют с экраном
//targetTouches - показывает кол-во пальцев, кот. взаимодействуют с этим элементом
//changedTouches - кол-во пальцев, кот. учавствуют в текущем событии. Которые совершили уже это действие
//.......................................................................

                        //
