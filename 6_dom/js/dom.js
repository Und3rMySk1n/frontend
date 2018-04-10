console.log('------------- DOM -------------');
var titleElement = document.body.firstElementChild;
var newDiv = titleElement.nextElementSibling.nextElementSibling;
console.log(newDiv);


// Получить элемент по названию html-тега
var allBlocks = document.getElementsByTagName('div');
console.log(allBlocks);


// Получить элемент по ID
var starks = document.getElementById('starks');
console.log(starks);


// Изменить текст элемента
var title = document.getElementsByTagName('h1')[0];
title.innerHTML += ' (DOM)';

// Вставка нового элемента
var king = document.getElementById('kingOfTheNorth')
var arya = document.createElement('li');
arya.innerHTML = 'Арья Старк';
arya.classList.add('list_item');
document.getElementById('starks').insertBefore(arya, king);


// Перебор выбранных элементов в цикле
var listItems = document.getElementsByClassName('list_item');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.textDecoration = 'underline';
}
document.getElementById('kingOfTheNorth').classList.add('king');