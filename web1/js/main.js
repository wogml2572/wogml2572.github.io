$(document).ready(function () {
	$(".mainSlide").slick({
		arrows:false,
		dots:true,
		autoplay:false,
	});

	$(".tripSlide").slick({
		arrows:false,
		dots:true,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite:false,
	});

	$(".healingSlide").slick({
		arrows:false,
		dots:false,
		autoplay:false,
		centerMode: false,
		asNavFor: '.healingNav',
	});

	$('.healingNav').slick({
		asNavFor: '.healingSlide',
		autoplay:false,
		arrows:true,
		dots: false,
		centerMode: false,
		focusOnSelect: false,
		responsive: [
			{
				breakpoint: 400,
				settings: {
					autoplay: true,
					autoplaySpeed: 2000,
					arrows:false
				}
			},
		]
	});

	$(".caroufredsel_wrapper").slick({
		arrows:false,
		dots:false,
		slidesToShow: 1,
		autoplay:false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
				}
			},
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				}
			},
		]
	});
	$('.mainTit_recent2').find('.ctrl > .play').hide();
	$('.mainTit_recent2').find('.ctrl > .stop').on('click', function() {
		$('.mainTit_recent2').find('.ctrl > .play').css({'display':'inline-block'}); $(this).hide();
		$('.caroufredsel_wrapper').slick('slickPause');
	});
	$('.mainTit_recent2').find('.ctrl > .play').on('click', function() {
		$('.mainTit_recent2').find('.ctrl > .stop').css({'display':'inline-block'}); $(this).hide();
		$('.caroufredsel_wrapper').slick('slickPlay');
	});
	$('.mainTit_recent2').find('.ctrl > .prev').on('click', function() {
		$('.caroufredsel_wrapper').slick('slickPrev');
		$('.mainTit_recent2').find('.play').hide();
		$('.mainTit_recent2').find('.stop').css({'display':'inline-block'});
	});
	$('.mainTit_recent2').find('.ctrl > .next').on('click', function() {
		$('.caroufredsel_wrapper').slick('slickNext');
		$('.mainTit_recent2').find('.play').hide();
		$('.mainTit_recent2').find('.stop').css({'display':'inline-block'});
	});


	function getCurrentDate(){
		let week = new Array('일', '월', '화', '수', '목', '금', '토');
		let today = new Date();
		let month = today.getMonth() + 1;
		let day = today.getDate();
		let dayName = week[today.getDay()];

		$(".weatherDay").text(month + "월" + day + "일" + "(" + dayName + ")");
	}
	getCurrentDate();


	$(".snList > a").on("click", function(e){
		e.preventDefault();
		let getId = $(this).attr("href");
		let idOffset = $(getId).offset().top;
		let getMenu = $("#header").innerHeight();
		$("body, html").animate({
			scrollTop : idOffset - getMenu,
		});
		navOnOff($(this));
	});

	let videoCnt = $("#html5video_html5_api")
	$(".btn_mplay").on("click",function () {
		$(".movieWrap").fadeIn();
	});
	$(".popClose").on("click", function () {
		$(".movieWrap").fadeOut();
		videoCnt[0].pause();
	});

});

$(window).scroll(function () {
	let offsetA = $("#sectionA").offset().top + $("#sectionA").innerHeight() / 3;
	let offsetB = $("#sectionB").offset().top + $("#sectionB").innerHeight() / 3;
	let offsetC = $("#sectionC").offset().top + $("#sectionC").innerHeight() / 3;
	let offsetMain = $("#main").offset().top - $("#ms_visual").innerHeight() ;
	let footerOffset = $("#main").innerHeight();
	let nowOffset = $(window).scrollTop();


	if(nowOffset <= offsetA){
		navOnOff(".snList1 > a");
	} else if(nowOffset <= offsetB){
		navOnOff(".snList2 > a");
	} else if(nowOffset <= offsetC){
		navOnOff(".snList3 > a");
	}
	if($(window).width() > 680) {
		if (nowOffset > offsetMain) {
			if (nowOffset > footerOffset) {
				if ($(window).width() <= 1200) {
					$(".sectionNav").fadeOut("fast");
				}
			} else {
				$(".sectionNav").fadeIn("fast");
			}
		} else if (nowOffset < footerOffset) {
			if (nowOffset < offsetMain) {
				$(".sectionNav").fadeOut("fast");
			} else {
				if ($(window).width() <= 1200) {
					$(".sectionNav").fadeIn("fast");
				}
			}
		}
	}




});

function navOnOff(id) {
	$(".snList").removeClass("navOn");
	$(id).parent("li").addClass("navOn");

}   

    