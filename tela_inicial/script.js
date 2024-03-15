$(document).ready(function(){
    $('#Mobile_butao').on('click', function(){
        $('#MobileMenu').toggleClass('active');
        $('#Mobile_butao').find('i').toggleClass('fa-x');
    });
});