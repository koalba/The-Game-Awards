$(document).ready( function(){


    let foto = 0 
    
    $('.media__dots .dots__dot').click(function(){

        foto = $('.dots__dot').index( $(this) )

        $('.media__ul').css('transform',`translateX(-${ foto * 33.33 }%)`)

        $('.media__dots .dots__dot').removeClass('active')
        $('.media__dots .dots__dot').eq( foto ).addClass('active')
    })

    $('.press__dots .dots__dot').click(function(){

        foto = $('.press__dots .dots__dot').index( $(this) )

        $('.press__ul').css('transform',`translateX(-${ foto * 16.66 }%)`)

        $('.press__dots .dots__dot').removeClass('active')
        $('.press__dots .dots__dot').eq( foto ).addClass('active')
    })

})