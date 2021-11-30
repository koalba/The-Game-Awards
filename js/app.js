'use strict'


// Cuando CLICK en .slider__li
    // foto = POSICION
    // .slider__grande TRANSFORM: TRANSLATE
    // TODOS los .slider__li REMOVE 'activo'
    // .slider__li FOTO ADD 'activo'


// Cuando hago CLICK en .der
    // foto AUMENTA
    // .slider__grande TRANSFORM: TRANSLATE
    // TODOS los .slider__li REMOVE 'activo'
    // .slider__li FOTO ADD 'activo'

// Cuando hago CLICK en .izq
        // foto DISMINUYE
    // .slider__grande TRANSFORM: TRANSLATE
    // TODOS los .slider__li REMOVE 'activo'
    // .slider__li FOTO ADD 'activo'


$(document).ready( function(){


    let foto = 0 
    
    $('.slider__li').click(function(){

        foto = $('.slider__li').index( $(this) )

        $('.slider__grande').css('transform',`translateX(-${ foto * 33.33 }%)`)

        $('.slider__li').removeClass('activo')
        $('.slider__li').eq( foto ).addClass('activo')

        if( foto > 1 ){
            $('.der').removeClass('activo')
        }else{
            $('.der').addClass('activo')
        }

        if( foto < 1 ){
            $('.izq').removeClass('activo')
        }else{
            $('.izq').addClass('activo')
        }
    })

    $('.der').click( function(){

        foto++

        $('.slider__grande').css('transform',`translateX(-${ foto * 33.33 }%)`)
        $('.slider__li').removeClass('activo')
        $('.slider__li').eq( foto ).addClass('activo')

        if( foto > 1 ){
            $('.der').removeClass('activo')
        }else{
            $('.der').addClass('activo')
        }

        if( foto < 1 ){
            $('.izq').removeClass('activo')
        }else{
            $('.izq').addClass('activo')
        }
    })

    $('.izq').click( function(){

        foto--

        $('.slider__grande').css('transform',`translateX(-${ foto * 33.33 }%)`)
        $('.slider__li').removeClass('activo')
        $('.slider__li').eq( foto ).addClass('activo')

        if( foto > 1 ){
            $('.der').removeClass('activo')
        }else{
            $('.der').addClass('activo')
        }

        if( foto < 1 ){
            $('.izq').removeClass('activo')
        }else{
            $('.izq').addClass('activo')
        }

    })


    $('.selector__fechas--titulo').click(function(){
        $('.selector__li').toggleClass('activo')
    })


    function sleep(){
        setTimeout(() => {
            console.log("sleep")
        }, 500);
    }

    let newsScroll = function(elemento){

        

        $(window).scroll(function(){
            
            let pixel = $(window).scrollTop()
            let top = $(elemento).offset().top
            let altura = $(window).height()
            // console.log(pixel +","+ top +","+ altura)
            
            
            if(pixel >= top - (altura / 1.2)){
                sleep()
                $(elemento).addClass('visible')
                
            }
            
        })
    }
    for (let cadaElemento of $('.grid__celda')) {
        sleep()
        newsScroll(cadaElemento)
        
    }
    
})
    
