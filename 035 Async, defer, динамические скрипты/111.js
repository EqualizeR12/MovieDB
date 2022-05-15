'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = "test.js";
// script.async = false;
// document.body.append(script);
//test.js добавляется после 111.js. Динамически загружаемые скрипты ведут себя как async
//Изменить относительный порядок скриптов при их загрузке - script.async = false;

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}
loadScript("test.js");
loadScript("some.js");
//Выполнение строго друг за другом