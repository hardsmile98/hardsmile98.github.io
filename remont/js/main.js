$(document).ready(function(){

	$('.projects_wrap_slider_block').slick({
		slidesToShow: 1,
    	slidesToScroll: 1,
		dots: false,
		speed: 500,
		draggable: false,
		prevArrow: '.projects_wrap_slider_bth_back',
		nextArrow: '.projects_wrap_slider_bth_next'
	});

	$('.teams_wrap_slider_block').slick({
		slidesToShow: 1,
    	slidesToScroll: 1,
		dots: false,
		speed: 500,
		draggable: false,
		nextArrow: '.teams_wrap_slider_bth_next',
		prevArrow: null
	});

	$('.examples_wrap_img_bedroom').on('click', function (e) {
	    e.preventDefault();
	  	$('#bedroom').click();
	});

	$('.examples_wrap_img_kitchen').on('click', function (e) {
	    e.preventDefault();
	  	$('#kitchen').click();
	});

	$('.examples_wrap_img_bathroom').on('click', function (e) {
	    e.preventDefault();
	  	$('#bathroom').click();
	});

	$('.examples_wrap_img_livingroom').on('click', function (e) {
	    e.preventDefault();
	  	$('#livingroom').click();
	});

	$('.header_wrap_mobile_menu').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_block").addClass("header_wrap_active");
	  	$(".bg_fon").addClass("block");
	});

	$('.bg_fon').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_block").removeClass("header_wrap_active");
	  	$(".bg_fon").removeClass("block");
	});

	$('.header_wrap_block_up_close').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_block").removeClass("header_wrap_active");
	  	$(".bg_fon").removeClass("block");
	});


	$(".cabinet_wrap_link").click(function(){
	  	$but = $(this);
	  	$bl = $but.data("url");
	  	if($(this).hasClass("cabinet_wrap_link_active")){
	  		$(".cabinet_wrap_link_active").removeClass("cabinet_wrap_link_active");
	  		$(".cabinet_wrap_item_active").removeClass("cabinet_wrap_item_active");
	  	} else {
	  		$(".cabinet_wrap_link_active").removeClass("cabinet_wrap_link_active");
	  		$(".cabinet_wrap_item_active").removeClass("cabinet_wrap_item_active");
	  		$but.addClass("cabinet_wrap_link_active");
	  		$(".cabinet_wrap_item."+$bl).addClass("cabinet_wrap_item_active")
	  	}
	});

	$('.quiz_bth').fancybox({
    	autoFocus : false,
    	afterLoad: function(){
      		$('.quiz_body_form_slider').slick({
    			slidesToShow: 1,
    			slidesToScroll: 1,
				dots: false,
				speed: 0,
				draggable: false,
				infinite: false,
				nextArrow: '.offer_wrap_bottom_bth_click_name',
				prevArrow: null,
				initialSlide: 0,
				swipe: false
  			});
    	},
    	afterClose: function(){
      		$('.quiz_body_form_slider').slick('unslick');
    	}
  	});

	$('.quiz_form_main_slider_item_label_input').on('change', function(event) {
		$('.label_active').removeClass('label_active');
		$('.quiz_form_main_slider_item_click').removeClass('bth_noactive');
		$label = $(this).parent();
		$label.addClass('label_active');
	});

	var progress = {
		current: ( 100 / ($('.quiz_form_main_slider_item').length) ),
		total: $('.quiz_form_main_slider_item').length,
		width: ( 100 / ($('.quiz_form_main_slider_item').length) ),
		process: doProgress
	};

	function doProgress () {}

	$('.quiz_form_main_slider').on('init', function(event, slick){
		$('.quiz_form_main_step').show();
		$('.gift_sum_active').removeClass('gift_sum_active');
		$('.quiz_form_main_slider_item_click').addClass('bth_noactive');
		$('.label_active').removeClass('label_active');
		$('.quiz_form_main_slider_item_label_input').prop('checked',false)

		progress.current = 100 / ($('.quiz_form_main_slider_item').length);

		$items = $('.quiz_form_main_slider_item').length;
	    $('.quiz_form_bottom_wrap_gift_sum').eq(0).addClass('gift_sum_active');
		$('.current_slide').text('1');
		$('.count_slide').text($items - 1)
		$('.quiz_form_main_line').css('width', progress.width + '%');
	});

	$(".quiz_form_main_slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
		$items = $('.quiz_form_main_slider_item').length;
    	$('.current_slide').text(currentSlide+1);

		//кнопка
		$('.quiz_form_main_slider_item_click').addClass('bth_noactive');

		//шкала сверху
		progress.current += progress.width;
		$('.quiz_form_main_line').css('width', progress.current + '%');

		$('.quiz_form_bottom_wrap_gift_sum').eq(currentSlide-1).removeClass('gift_sum_active');
		$('.quiz_form_bottom_wrap_gift_sum').eq(currentSlide).addClass('gift_sum_active');

		if(currentSlide + 1 == $items){
			$('.quiz_form_main_step').hide();
		}
	});

	$(".phone").mask("+7 (999) 999-9999");

});