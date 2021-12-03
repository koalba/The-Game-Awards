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



    let newsScroll = function( elemento){

        let posicion = $('.grid__celda').index( $(elemento) )
        let tiempo = (posicion % 3) * 250

        animacion( elemento , tiempo )

        $(window).scroll(function(){ 
            animacion( elemento , tiempo )
        })
    }


    let animacion = ( elemento , tiempo ) => {
        setTimeout(()=>{
            let pixel = $(window).scrollTop()
            let top = $(elemento).offset().top
            let altura = $(window).height()
            
            if(pixel >= top - (altura / 1.2)){
                $(elemento).addClass('visible')      
            }
        },tiempo)
    }
    
    for (let cadaElemento of $('.grid__celda')) {
        newsScroll(cadaElemento)
    }
    
})
    
$('.header__a--signin').click(function(){
    $('.signin').removeClass('oculto')
})
$('.signin__close').click(function(){
    $('.signin').addClass('oculto')
})



