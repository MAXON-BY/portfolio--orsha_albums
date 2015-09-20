$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			//alert("Спасибо за заявку!");

			// Success message
			$('.success').html("<div class='alert alert-success'>");
			$('.success > .alert-success')
				.append("<strong>Заявка отправлена!</strong>");
			$('.success > .alert-success')
				.append('</div>');

			$('.success_floor').html("<div class='alert alert-success'>");
			$('.success_floor > .alert-success')
				.append("<strong>Заявка отправлена!</strong>");
			$('.success_floor > .alert-success')
				.append('</div>');

			setTimeout(function() {
				$("form").trigger("reset")
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//animation
	$(".why").animated("fadeInUp", "fadeOutDown");

	$(".fig").animated("flipInY", "fadeOutDown");
	$(".help p").animated("flipInY", "fadeOutDown");
	$(".application").animated("fadeInRight", "fadeOutDown");
	$(".call_us .block").animated("fadeInLeft", "fadeOutDown");
	$(".call").animated("fadeInRight", "fadeOutDown");
	$("#shema .block").animated("rollIn", "fadeOutDown");

	$(".left").animated("fadeInLeft", "fadeOutDown");
	$(".right").animated("fadeInRight", "fadeOutDown");

	$(".main img").animated("fadeInLeft", "fadeOutDown");
	$(".tubmain img").animated("fadeInRight", "fadeOutDown");

	$("#sale p").animated("fadeInLeft", "fadeOutDown");
	$("#sale a").animated("zoomInUp", "fadeOutDown");

	$("#parents a").animated("zoomInUp", "fadeOutDown");

	//popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$("#owl-demo").owlCarousel({

		navigationText : false,
		singleItem : true,
		navigation : true, // Show next and prev buttons
		pagination: true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		autoPlay: 10000,

		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade"
	});

	$("#owl-demo_1").owlCarousel({

		navigationText : false,
		navigation : true, // Show next and prev buttons
		pagination: true,
		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,
		autoPlay: 10000,

		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade"
	});
	
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
// Плавный скроллинг при нажатии на ссылку
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


