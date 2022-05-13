// console.log(document.head);

// console.log(document.documentElement);//<html lang="en"> со всем содержимым!

// console.log(document.body.childNodes);//Псевдомассив дочерних элементов body

// console.log(document.body.firstChild);//Первый дочений элем.
// console.log(document.body.lastChild);//Последний
//Отталкивались от родителя!! 👆👆 
    //.................

// console.log(document.querySelector('#current').parentNode);//<div class="first">…</div>
// console.log(document.querySelector('#current').parentNode.parentNode);//<div class="wrapper">…</div>
// console.log(document.querySelector('#current').parentElement);//👍

// //Data-атрибуты!
// console.log(document.querySelector('[data-current="3"]').nextSibling);//доступ к следующему элементу
// console.log(document.querySelector('[data-current="3"]').previousSibling);//доступ к предыдущему элементу

//Чтобы не попасть на текстовый узел типа "перенос строки", исп-ся previousElementSibling
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);//доступ к предыдущему ЭЛЕМЕНТУ👍
    //...................

// for(let node of document.body.childNodes) {//Прерываем цикл, если nodeName перенос и т.д. 
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }