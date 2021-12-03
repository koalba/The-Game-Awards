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


    $('.selector__all').click(function(){
        $('.selector__li').toggleClass('activo')
        $('.grid__celda').css('display','block')
        $('.selector__li').removeClass('select').removeClass('unselected')
        $('.selector__svg').toggleClass('activo')
    })
    // $('.selector__li').click(function(){
    //     let dejar = $('.selector__li').index($(this))
    //     $('.selector__li').removeClass('activo')
    //     $('.selector__li').eq(dejar).addClass('activo')
    // })


    $('.selector__fechas').click(function(){
        let anio = $(this).html()
        $('.grid__celda').css('display','none')
        $(`.grid__celda[data-year="${ anio }"]`).css('display','block')
    })
    $('.selector__li').click(function(){
        let selected = $('.selector__li').index($(this))
        $('.selector__li').toggleClass('select').toggleClass('unselected')
        $('.selector__li').eq(selected).toggleClass('select').toggleClass('unselected')
        $('.selector__all').toggleClass('unselected')
        $('.selector__svg').toggleClass('activo')

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



