$(document).ready( function(){
    const top = $('.hero__ul').offset().top
    const menuH = $('.header').height()
    const secmenuH = $('.hero__ul').height()

    $(window).scroll(function(){
    
        let pixel = $(window).scrollTop()
        let mediaT = $("#media").offset().top
        let hostT = $("#host").offset().top
        let boardT = $("#board").offset().top
        let pressT = $("#press").offset().top
        let contactT = $("#contact").offset().top

        let finPixel = pixel + menuH + secmenuH;

        if(pixel + menuH >= top){
            $('.hero__ul').addClass('active')
        } else if (pixel + menuH < top){
            $('.hero__ul').removeClass('active')
        }

        if(finPixel >= mediaT && finPixel < hostT){
            $('.hero__li').removeClass('active')
            $('.li--mediakit').addClass('active')
        } else if (finPixel < mediaT){
            $('.hero__li').removeClass('active')
            $('.li--overview').addClass('active')
        } else if(finPixel >= hostT && finPixel < boardT){
            $('.hero__li').removeClass('active')
            $('.li--host').addClass('active')
        } else if(finPixel >= boardT && finPixel < pressT){
            $('.hero__li').removeClass('active')
            $('.li--advisory').addClass('active')
        } else if(finPixel >= pressT && finPixel < contactT){
            $('.hero__li').removeClass('active')
            $('.li--press').addClass('active')
        } else if(finPixel >= contactT){
            $('.hero__li').removeClass('active')
            $('.li--contact').addClass('active')
        } 
    })

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