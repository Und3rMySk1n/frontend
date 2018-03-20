console.log('----------- Массивы -----------');
var ninjas = ['Leo', 'Mike', 'Raph', 'Don'];
console.log(ninjas[0]);
console.log(ninjas[6]);

var arrayOfSix = new Array(6);
console.log('First element of arrayOfSix: ', arrayOfSix[0]);
console.log('Length: ', arrayOfSix.length);

var matrix= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Left center number of matrix: ', matrix[1][0]);

var stringAsArray = 'Строка - тоже массив';
console.log('Third letter: ', stringAsArray[2]);
console.log('String length: ', stringAsArray.length);

console.log('----------- Объекты -----------');
// Объекты
var mouse = {
    name: 'Mickey',
    age: 89,
    sayHello: function() {
        console.log('Hello, I am Mickey!');
    }
};
mouse.sayHello();


// Объекты и их свойства
var Jamie = {
    name: 'Jamie',
    age: 45,
    sayHello: function() {
        console.log('Hello, I am ' + this.name + '!');
    }
};
Jamie.sayHello();


// Конструктор объектов
var User = function(name, age) {
    this.name = name;
    this.age = age;
}

var John = new User('John', '32');
var Therion = new User('Therion', '27');
console.log(John);
console.log(Therion);