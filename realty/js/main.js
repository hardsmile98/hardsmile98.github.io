$(document).ready(function(){

	$('.page_wrap_main_show').on('click', function (e) {
	    e.preventDefault();
	  	$('#page_wrap_main_hidden').click();
	});

	$('.service_wrap_imgs_show').on('click', function (e) {
	    e.preventDefault();
	  	$('#service_wrap_imgs_hidden').click();
	});

	$('.object_wrap_main_left_slider_box').slick({
		slidesToShow: 1,
    	slidesToScroll: 1,
		dots: false,
		draggable: false,
		asNavFor: '.object_wrap_main_left_nav',
		nextArrow: '.object_wrap_main_left_slider_next',
		prevArrow: '.object_wrap_main_left_slider_back'
	});
	$('.object_wrap_main_left_nav').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		asNavFor: ".object_wrap_main_left_slider_box",
		focusOnSelect: true,
		responsive: [
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 3
	          }
	        }
      	]
	});
	
	$('.offer_wrap_slider_block').slick({
		slidesToShow: 1,
    	slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		nextArrow: '.offer_wrap_slider_next',
		prevArrow: '.offer_wrap_slider_back'
	});


	$('.tidings_wrap_block_slider').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		dots: false,
  		speed: 500,
  		draggable: false,
  		nextArrow: '.tidings_wrap_block_next',
		prevArrow: '.tidings_wrap_block_back',
		responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            slidesToShow: 3
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1
	          }
	        }

      	]
	});

	$('.commands_wrap_com_block_slider').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots: false,
  		speed: 800,
  		draggable: false,
  		variableWidth: true,
  		centerMode: true,
  		focusOnSelect: true,
  		nextArrow: '.commands_wrap_com_block_next',
		prevArrow: '.commands_wrap_com_block_back',
		responsive: [
	        {
	          breakpoint: 992,
	          settings: {
	            slidesToShow: 1
	          }
	        }
      	]
	});

	//ФОРМЫ ПОИСКА 
	$('.choise').click(function (e) {
		e.preventDefault();
		$choise = $(this).attr('href');
		$($choise).prop('checked', true);
		$('.choise').removeClass('choise_active');
		$(this).addClass('choise_active');
	});

	//КНОПКА ТЕГОВ
	$('.tags_bth_open').click(function(){
        if( $(this).text() == 'Развернуть поиск' ){
            $('.tags_wrap').show();
            $(this).text('Свернуть поиск');
        }else{
            $('.tags_wrap').hide();
            $(this).text('Развернуть поиск');
        }
        return false;
    });


	//ФОРМЫ ФИЛЬТРОВ

	$('.directory_wrap_nav_link').click(function (e) {
		e.preventDefault();
		$('.directory_wrap_nav_active').removeClass('directory_wrap_nav_active');
		$(this).addClass('directory_wrap_nav_active');
	});

	$('.catalog_wrap_filter_link').click(function (e) {
		e.preventDefault();
		$('.catalog_wrap_filter_active').removeClass('catalog_wrap_filter_active');
		$(this).addClass('catalog_wrap_filter_active');
	});

	//ОТВЕТЫ НА ВОПРОСЫ НА СТРАНИЦЕ СЕРВИСА
	$(".service_wrap_main_left_answers_item").click(function () {
        $this = $(this);

        if ($this.hasClass("answers_item_opened")) {
            $this.removeClass("answers_item_opened");
            $this.find(".service_wrap_main_left_answers_item_body").slideUp();
        } else {
            $this.addClass("answers_item_opened");
            $this.find(".service_wrap_main_left_answers_item_body").slideDown();
        }
    });
    //ОТВЕТЫ НА ВОПРОСЫ НА СТРАНИЦЕ СЕРВИСА

	//МЕНЮ В ФУТЕРЕ
    $(".footer_wrap_col_menu_link").click(function () {
        $this = $(this);
        $menu = $this.children(".footer_wrap_col_menu_submenu")
        if ($menu.hasClass("block")) {
            $menu.removeClass("block");
            $this.find(".footer_wrap_col_menu_more").removeClass('rotate');
            $menu.slideUp();
        } else {
            $menu.addClass("block");
            $this.find(".footer_wrap_col_menu_more").addClass('rotate');
            $menu.slideDown();
        }
    });
    //МЕНЮ В ФУТЕРЕ

    //МЕНЮ ШАПКИ
    $('.header_wrap_mobile').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_nav").addClass('active');
	  	$(".overlay").addClass('active');
	});

	$('.overlay').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_nav").removeClass('active');
	  	$(".overlay").removeClass('active');
	});

	$('.close_mob').on('click', function (e) {
	    e.preventDefault();
	  	$(".header_wrap_nav").removeClass('active');
	  	$(".overlay").removeClass('active');
	});
	//МЕНЮ ШАПКИ

	$('.header_wrap_nav_menu_submenu_link').on('click', function (e) {
	    $this = $(this);
	  	$menu = $this.children(".header_wrap_nav_menu_submenu_sub")
	  	if ($menu.hasClass("block")) {
	  		$menu.removeClass("block");
	  		$this.find(".header_wrap_nav_more").removeClass('rotate');
	  	} else {
	  		$menu.addClass("block");
	  		$this.find(".header_wrap_nav_more").addClass('rotate');
	  	}
	});

	$('.header_link').on('click', function (e) {
		e.preventDefault();
	    $this = $(this);
	  	$menu = $this.parent().children(".header_wrap_nav_menu_submenu")
	  	if ($menu.hasClass("active")) {
	  		$menu.removeClass("active");
	  		$this.find(".header_wrap_nav_more").removeClass('arrow');
	  	} else {
	  		$('.header_wrap_nav_menu_submenu').removeClass('active');
	  		$('.header_wrap_nav_more').removeClass('arrow');
	  		$menu.addClass("active");
	  		$this.find(".header_wrap_nav_more").addClass('arrow');
	  	}
	});

	$(window).resize(function() {
   	if ($(window).width() < 768) {
	    $('.header_wrap_nav_menu_submenu').removeClass('active');
	    $('.header_wrap_nav_more').removeClass('arrow');
	}
	});

});