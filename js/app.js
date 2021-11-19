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

})