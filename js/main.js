$(document).ready(function() {
    // All init files
     new WOW().init();
    //  var rellax = new Rellax('.rellax', {
    // });

    // Remove Ad button
    const removeAdButton = () => {
        setTimeout(() => {
            var widget = $("#instagram #eapps-instagram-feed-1 > a[href$='https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instagram-feed&utm_term=undefined&utm_campaign=free-widget']");
            if(widget === null) {
                removeAdButton()
            }
            widget.hide()
        }, 1000);
    }
    
    removeAdButton();

    var scroll = $(window).scrollTop();
    if(scroll < 530) {
        console.log("test")
    }

    // Accordion
    // $('.accordion').click(function(){
    //     $(this).toggleClass('open');
    //     $(this).hasClass('open') ? $(".accordion-content", this).slideDown() : $(".accordion-content", this).slideUp();
    //     $(this).hasClass('open') ? $(".btn", this).slideUp() : $(".btn", this).slideDown();
    // })
    
    // Demo Reo
    $(".playpause").fadeOut();
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
        $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    

    $('.sound-toggle').click(function () {
        if( $('.video').prop('muted', true)) {
            $('.sound-toggle').addClass('off');
            $('.video').prop('muted', false).addClass('sound-on')
            console.log('sound-on')
        } else {
            $('.video').peop('muted', true)
            $('.sound-toggle').removeClass('off')
            console.log('sound-off')
        }
    })

});
