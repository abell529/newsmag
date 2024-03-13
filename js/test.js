$(document).ready(function() {
    $('.menu-trigger').click(function() {
        var content = $('.slide-content');
        var isVisible = content.data('visible');

        if (isVisible) {
            content.animate({ top: '-50px' }, 'fast').data('visible', false);
        } else {
            content.animate({ top: '40px' }, 'fast').data('visible', true); /* 40px is the height of the header */
        }
    });
});
