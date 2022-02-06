$(document).ready(function() {
    $('.CountryDropDown').click(function(e) {
        if ($(this).next().hasClass('active')){
            $(this).next().removeClass('PhoneMAxH')
            $(this).next().removeClass('active')
            $(this).find('svg').css('transform', 'rotate(180deg)')
        } else {
            $(this).next().addClass('PhoneMAxH')
            $(this).next().addClass('active')
            $(this).find('svg').css('transform', 'rotate(0deg)')
        }
    })
})