$(function () {
    
    $('.check-btn input[type="radio"]').on( "change", function() {
        $(this).parent().parent().siblings('.filter-list').addClass('active');
    });

});