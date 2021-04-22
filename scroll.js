$('<div></div>')
    .attr('id', 'scrolltotop')
    .hide()
    .css({ 'z-index': '1000', 'position': 'fixed', 'bottom': '50px', 'right': '50px', 'cursor': 'pointer', 'width': '50px', 'height': '50px', 'background': '#111111' })
    .appendTo('body')
    .click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
$('<div></div>')
    .css({ 'width': '10px', 'height': '10px', 'transform': 'rotate(-135deg)', 'border': 'solid #ffffff', 'border-width': '0 4px 4px 0', 'padding': '3px', 'margin-top': '20px', 'margin-left': '19px' })
    .appendTo('#scrolltotop');
$(window).scroll(function () {
    if ($(window).scrollTop() < 10) {
        $('#scrolltotop').fadeOut();
    } else {
        $('#scrolltotop').fadeIn();
    }
});