$(document).ready(function() {
    // Accordion
    $('.accordion-label').click(function() {
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });

    // Tabbed section
    $('.tab-menu-item').click(function() {
        var index = $(this).index();
        $('.tab-menu-item').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.tab-content').eq(index).show();
    });
});
