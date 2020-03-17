$(document).ready(function() {
    // All init files
    //  new WOW().init();
    //  var rellax = new Rellax('.rellax', {
    // });

    // Remove Ad button
    setTimeout(() => {
        var widget = $("#instagram #eapps-instagram-feed-1 > a[href$='https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instagram-feed&utm_term=undefined&utm_campaign=free-widget']")
        widget.hide()
    }, 1000);

    // Accordion
    $('.accordion').click(function(){
        $(this).toggleClass('open');
        $(this).hasClass('open') ? $(".accordion-content", this).slideDown() : $(".accordion-content", this).slideUp();
        $(this).hasClass('open') ? $(".btn", this).slideUp() : $(".btn", this).slideDown();
    })
    
});
