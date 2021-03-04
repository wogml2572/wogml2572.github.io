$(document).ready(function(){
  
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) == null ? false : true;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
        },
        IOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any()){
        if(isMobile.Android()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.IOS()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.BlackBerry()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.Opera()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }else if(isMobile.Windows()){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
        }
    }else{

        if(window.innerWidth < 1001){
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');

        }else{
            $('.mobile-gnb').removeClass('mobile-gnb').addClass('gnb');
        }
    }

	$(window).resize(function() {
        var $windowWidth = window.innerWidth;

        $(".gnb > ul > li").off();
        $(".mobile-gnb > .dl > li > a").off("click");
        $(".mobile-gnb  .nav > .bunch5 > .level > .level2-1").off("click");
        $('.m-sub-gnb').attr("style", "");
        $('.sub-gnb').attr("style", "");

		
		
        if($windowWidth < 1001) {
            $('.gnb').removeClass('gnb').addClass('mobile-gnb');
            $('.sub-gnb').removeClass('sub-gnb').addClass('m-sub-gnb');

			/*
            $('.level1-1').click(function(e) {
                e.preventDefault();

                if($('.level1-1').hasAttr('target')){
                    return true;
                }

				
            });
			*/

            $(".mobile-gnb > .dl > li > a").on("click", function() {
                $('.mobile-gnb > .dl > li > a').removeClass('on');
                $(this).toggleClass('on');
                $('.mobile-gnb > .dl > li > .m-sub-gnb').slideUp('fast');
                $(this).next('.m-sub-gnb').stop().slideToggle('fast');
            });

            $(".mobile-gnb  .nav > .bunch5 > .level > .level2-1").on("click", function() {
                var level = $(this);
                console.log(level);

                $('.mobile-gnb  .nav > .bunch5 > .level > .level2-1').removeClass('on');
                $(this).toggleClass('on');
                $('.nav > .bunch5 > .level > .level3-1').slideUp('fast');
                $(this).next('ul').stop().slideToggle('fast');
            });
        } else {
            $('.mobile-gnb').removeClass('mobile-gnb').addClass('gnb');
            $('.m-sub-gnb').removeClass('m-sub-gnb').addClass('sub-gnb');

            $(".gnb > ul > li").on("mouseover", function() {
                $(this).children('.sub-gnb').stop().slideDown("fast");
            });

            $(".gnb > ul > li").on("mouseout", function() {
                $(this).children('.sub-gnb').stop().slideUp("fast");
            });
			$('body').css({'overflow-y':'visible'});
        }
    }).resize();


    $('.toggle').click(function(){
        $('.mobile-gnb').toggleClass('on');
        $('.mb-closebtn').toggleClass('on');
        $('.mask-wrap').toggleClass('on');
		$('body').css({'overflow-y':'hidden'});
		$('.connsite, .language, .top-search').removeClass('enable');
    });

    $('.mb-closebtn').click(function(){
		$('.mb-closebtn').toggleClass('on');
        $('.mobile-gnb').removeClass('on');
        $('.toggle').show();
        //$('.mb-closebtn').hide();
		$('.mask-wrap').removeClass('on');
		$('body').css({'overflow-y':'visible'});
    });

    $('.mask-wrap').click(function(){
        $(this).removeClass('on');
        $('.mobile-gnb').removeClass('on');
        $('.mb-closebtn').removeClass('on');
		$('body').css({'overflow-y':'visible'});
    });
	
	
	$('.secs').each(function(){
		if($(this).find(".m-sub-gnb").length > 0){
			$(this).addClass('is-sub');
		}else{
		  
		}
	});
	$('.level1-1').click(function(){
		var bodyWidth = document.documentElement.clientWidth; 
		if($(this).parent('.secs').hasClass('is-sub')){
		    if(bodyWidth < 1001) {
			   return false
		   }else{
			return true
		   }
		}else{
		}

	});

	$('.level').each(function(){
		if($(this).find(".level3-1").length > 0){
			$(this).addClass('is-sub');
		}else{
		  
		}
	});
	$('.level2-1').click(function(){
		var bodyWidth = document.documentElement.clientWidth; 
		if($(this).parent('.level').hasClass('is-sub')){
		    if(bodyWidth < 1001) {
			   return false
		   }else{
			return true
		   }
		}else{
		}

	});

});




/* scroll style */
$(function() {
	$(document).ready(function() {
		$(".boxscroll01").getNiceScroll().resize();
		$(".boxscroll01").niceScroll({cursorcolor:"#fff",background:"#32659e",cursoropacitymax:0.7,cursorminheight:120});
	});

	$(document).ready(function() {
		$(".boxscroll02").getNiceScroll().resize();
		$(".boxscroll02").niceScroll({cursorcolor:"#002c5e",background:"#d7d7d7",cursoropacitymax:0.7,cursorminheight:120});
	});

});


$(document).ready(function(){

    $(".mb-searchbtn").click(function() {
        if($(this).parent().hasClass("sc-active")){
            $(this).parent().removeClass('sc-active');
        }else{
            $(this).parent().addClass('sc-active');
        }
    });
    $(".top-search .mo-btn").click(function() {
        if($(this).parent().parent().hasClass("sc-active")){
            $(this).parent().parent().removeClass('sc-active');
        }else{
            $(this).parent().parent().addClass('sc-active');
        }
    });


});

$(document).ready(function(){

    $("#header .sch-input-btn .detail-btn").click(function() {
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });

});


$(document).ready(function(){

    $("#header .snsbtn-pgsizelang .today-btn .tbtn").click(function() {
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });


	
		
});



$(document).ready(function(){

    $("#header .mobile-top .todaysns-btns .todaybtn .tbtn").click(function() {
        if($(this).parent().hasClass("active")){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });

});

// 2019-11-02
function sizeControl(width) {
	width = parseInt(width);
	var bodyHeight = document.documentElement.clientHeight; 
	var bodyWidth = document.documentElement.clientWidth; 
	
	var chkHeader = $('#header').outerHeight();
	if(width > 983){
		$('.gnb, .mask-wrap').css({'height': 'auto', 'top': 'auto'});
	}else{
		$('.mobile-gnb, .mask-wrap').css({'height': bodyHeight - chkHeader, 'top': chkHeader});
	}
	
}
$(function($){
	sizeControl($(this).width());
	$(window).resize(function() {
		if(this.resizeTO) {
			clearTimeout(this.resizeTO);
		}
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		}, 1);
	});
});	
$(window).on('resizeEnd', function() {
	sizeControl($(this).width());
});
$(window).load( function() { 
	sizeControl($(this).width());
});