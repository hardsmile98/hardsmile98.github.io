$(document).ready(function(){
	new WOW().init();
	
	$('input[name="phone"]').mask('+7 (999) 999-99-99');

	$(".modal_window").fancybox();
	$(".send-mail").fancybox();

	$('.catalog_slider1').slick({
		arrows: false,
		dots: false,
		asNavFor: '.catalog_nav1'
	});
	$('.catalog_nav1').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		asNavFor: ".catalog_slider1",
		focusOnSelect: true
	});

	$('.catalog_slider2').slick({
		arrows: false,
		dots: false,
		asNavFor: '.catalog_nav2'
	});
	$('.catalog_nav2').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		asNavFor: ".catalog_slider2",
		focusOnSelect: true
	});
	$('.catalog_slider3').slick({
		arrows: false,
		dots: false,
		asNavFor: '.catalog_nav3'
	});
	$('.catalog_nav3').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		asNavFor: ".catalog_slider3",
		focusOnSelect: true
	});

	$('.catalog_slider4').slick({
		arrows: false,
		dots: false,
		asNavFor: '.catalog_nav4'
	});
	$('.catalog_nav4').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		asNavFor: ".catalog_slider4",
		focusOnSelect: true
	});

	$(".menu__item-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	$(".order-form").validate({
  		rules: {
		    name: "required",
		    phone: {
		      required: true
    		}
  		}, submitHandler: function(form){
			$(".order-form").ajaxSubmit({
				type: 'POST',
				url: 'mail.php',
				success: function () {
	                $(".send-mail").trigger('click');
	                $("input[type=text]").val("");
	            },
	         	error: function () {
	               	$(".send-mail").trigger('click');
	               	$("input[type=text]").val("");
	            }
			});
		}
	});
	
});