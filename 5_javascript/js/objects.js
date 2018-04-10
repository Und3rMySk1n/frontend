console.log('----------- Массивы -----------');

var simpleArray = [];
var ninjas = ['Leo', 'Mike', 'Raph', 'Don'];

console.log('Length: ', ninjas.length);


var matrix= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0]);
console.log('Left center number of matrix: ', matrix[1][0]);

for (var i = 0; i < ninjas.length; i++) {
    console.log('My name is: ', ninjas[i]);
}

var stringAsArray = 'Строка - тоже массив';
console.log('Third letter: ', stringAsArray[2]);
console.log('String length: ', stringAsArray.length);



console.log('----------- Объекты -----------');
// Объекты

var emptyObject = {};

var mouse = {
    name: 'Mickey',
    age: 90,
    pet: {
        name: 'Pluto'
    },
    sayHello: function() {
        console.log('My name is Mickey!');
    }
};
console.log('Age is: ', mouse['age']);
console.log(mouse);

console.log('Mickeys pet: ', mouse.pet.name);

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
    this.toString = function () {
        return this.name + ' and i am ' + this.age + ' years old!';;
    }
}

var John = new User('John', '32');
var Therion = new User('Therion', '27');
console.log(John);
console.log(Therion);


console.log('I am ' + John);
console.log('I am ' + Therion);