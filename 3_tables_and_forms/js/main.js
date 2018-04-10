$(window).on('load', function() {
    sendFormValues();
});


function sendFormValues() {
    $('#films_form').submit(function(event) {
        event.preventDefault();
        console.log('---', 'form submitted!');
        console.log('Username: ', $('#username').val());
        console.log('Email: ', $('#email').val('new_email@test.com'));
    });
    
    $('#username').focus(function(){
        console.log($(this).val());
    });
}
