console.log('----------- Переменные -----------');
// Переменные
var exampleVariable = 'I am a string';
var undefinedVariable;
var numericVariable = 27;
console.log('Numeric variable is: ', numericVariable);
numericVariable = 'And now numeric is a string';
console.log(numericVariable);


console.log('----------- Циклы -----------');
// Циклы
for (var counter = 0; counter < 3; counter++) {
    console.log('Counter is: ' + counter);
}


// Условия
var result = prompt('Сколько будет 2 + 2', '');
if (result < 4) {
    alert('Меньше');
} else if (result > 4) {
    alert('Больше');
} else {
    alert('Отлично!');
}


console.log('----------- Функции и глобальные переменные -----------');
// Функции
var globalVariable = 'global';
console.log('globalVariable is: ', globalVariable);

function changeGlobal() {
    globalVariable = 'is local';
    console.log('globalVariable in function: ', globalVariable);
}

changeGlobal();
console.log('globalVariable outside function: ', globalVariable);