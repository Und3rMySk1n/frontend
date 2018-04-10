$(window).on('load', function() {
    performKingButtonClick();
    scrollToTop();
    doSomethingWithListItems();
    
    //performKingButtonClickJS();
    //scrollToTopJS();
});


// jQuery
function performKingButtonClick() {
    var king = $('#kingOfTheNorth');
    
    $('#clicker').click(function() {
        king.html(king.html() + ', King of the North!').addClass('king').closest('ul').addClass('bordered_list');
    })
}


// Native JS
function performKingButtonClickJS() {
    var king = document.getElementById('kingOfTheNorth');
    var button = document.getElementById('clicker');
    
    button.addEventListener('click', function() {
        king.innerHTML = king.innerHTML + ', King of the North!';
        king.classList.add('king');
        var list = getClosest(king, 'ul');
        list.classList.add('bordered_list');
    })
    
    var getClosest = function (element, selector) {
        for ( ; element && element !== document; element = element.parentNode ) {
            if (element.matches(selector)) {
                return element;
            }
        }
        return null;
    };
}


// jQuery scroll top
function scrollToTop() {
    $('#scrollTop').click(function(event) {
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    });
}


// Vanilla JS scroll top
function scrollToTopJS() {
    var SCROLL_STEP = 50;
    var SCROLL_TIME = 15;
    document.getElementById('scrollTop').addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll();
    });
    
    function smoothScroll() {
        if (window.scrollY > 0) {
            var newScroll = window.scrollY - SCROLL_STEP;
            window.scroll(0, newScroll);
            setTimeout(smoothScroll, SCROLL_TIME);
        }
    }
}


function doSomethingWithListItems() {
    $('li').each(function() {
        console.log('---', $(this).html());
    });
}