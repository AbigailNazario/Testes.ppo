$(document).ready(function(){
    $('#Mobile').on('click', function(){
        $('#MobileMenu').toggleClass('active');
        $('#Mobile').find('i').toggleClass('fa-x');
    });
});