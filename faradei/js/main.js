$(document).ready(function(){
	$(".header_menu_open-mobile").click(function (e) {
		e.preventDefault();
		$(".header_menu").addClass("header_menu_active");
	});
	$(".header_menu_close").click(function (e) {
		e.preventDefault();
		$(".header_menu").removeClass("header_menu_active");
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var menu = $(".header_menu_active"); // тут указываем ID элемента
		var div = menu.children(".header_menu_wrap")
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".header_menu").removeClass("header_menu_active");
		}
	});
});