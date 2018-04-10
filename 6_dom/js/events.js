console.log('------------- Events -------------');

var button = document.getElementById('clicker');
var counter = document.getElementById('counter');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

button.addEventListener('click', function() {
    console.log('Button clicked twice!');
});

// Event is an object too
button.addEventListener('click', function(event) {
    console.log(event);
});

var link = document.getElementById('page_link');
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log(link.innerHTML);
});

button.addEventListener('click', function() {
    var number = parseInt(counter.innerHTML);
    counter.innerHTML = number + 1;
})


// Универсальный обработчик
var buttons = document.getElementsByClassName('clicker_button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var counter = this.getElementsByTagName('span')[0];
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    })
}

window.addEventListener('scroll', function() {
    console.log('scrolled');
})