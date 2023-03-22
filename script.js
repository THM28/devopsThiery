$('a[href^="#"').on('clicl',function(event){
    var target = $(this.getAttribute('href'));
    if(target.lenght){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().scrollTop
        },1000);
    }
});