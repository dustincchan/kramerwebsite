/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	var babyImages = 	( '<img id="carousel-image" src="images/carousel/Babies_01.jpg"/>'
										);

	var childrenImages = 	( '<img id="carousel-image" src="images/carousel/Children_02.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Children_03.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Children_04.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Children_05.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Children_06.jpg"/>'
										);

	var familyImages = ('<img id="carousel-image" src="images/carousel/Families_01.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_02.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_03.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_04.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_05.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_06.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_07.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_08.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_09.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_10.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_11.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_12.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_13.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_14.jpg"/>' +
											'<img id="carousel-image" src="images/carousel/Families_15.jpg"/>'
										);
	var couplesImages = 	( '<img id="carousel-image" src="images/carousel/Couples_01.jpg"/>' +
													'<img id="carousel-image" src="images/carousel/Couples_02.jpg"/>' +
													'<img id="carousel-image" src="images/carousel/Couples_03.jpg"/>' +
													'<img id="carousel-image" src="images/carousel/Couples_04.jpg"/>' +
													'<img id="carousel-image" src="images/carousel/Couples_05.jpg"/>'
												);
	$(document).ready(function() {
		$('.carousel-images').hide();
	});

	$(document).on('click', '#baby-images-link', function(e) {
		e.preventDefault();
		initializeCarousel(babyImages);
	});

	$(document).on('click', '#children-images-link', function(e) {
		e.preventDefault();
		initializeCarousel(childrenImages);
		$('.carousel-header').html('Children<button id="carousel-back-button">Go Back</button>');

	});

	$(document).on('click', '#couple-images-link', function(e) {
		e.preventDefault();
		initializeCarousel(couplesImages);
		$('.carousel-header').html('Couples<button id="carousel-back-button">Go Back</button>');
	});

	$(document).on('click', '#family-images-link', function(e) {
		e.preventDefault();
		initializeCarousel(familyImages);
		$('.carousel-header').html('Families<button id="carousel-back-button">Go Back</button>');

	});

	function initializeCarousel(images) {
		$('.gallery').fadeOut();
		$('.carousel-images').html(images);
		$('.carousel-images').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 2000
		});
		setTimeout(function() {
			$('.carousel-images').fadeIn();
			$('.carousel-header').fadeIn();
		}, 500);
	}

	$(document).on('click', '#carousel-back-button', function(e) {
		e.preventDefault();
		$('.carousel-header').hide();
		$('.carousel-images').fadeOut();
		$('.carousel-images').slick('unslick');
		$('.carousel-images').empty();
		$('.carousel-header').fadeOut();
		$('.gallery').fadeIn();
	});

	skel.breakpoints({
		wide: '(max-width: 1920px)',
		normal: '(max-width: 1680px)',
		narrow: '(max-width: 1280px)',
		narrower: '(max-width: 1000px)',
		mobile: '(max-width: 736px)',
		mobilenarrow: '(max-width: 480px)',
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			skel.on('change', function() {

				if (skel.vars.mobile || skel.breakpoint('mobile').active)
					$body.addClass('is-touch');
				else
					$body.removeClass('is-touch');

			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Gallery.
			// $window.on('load', function() {
			// 	$('.gallery').poptrox({
			// 		baseZIndex: 10001,
			// 		useBodyOverflow: false,
			// 		usePopupEasyClose: false,
			// 		overlayColor: '#1f2328',
			// 		overlayOpacity: 0.65,
			// 		usePopupDefaultStyling: false,
			// 		usePopupCaption: true,
			// 		popupLoaderText: '',
			// 		windowMargin: (skel.breakpoint('mobile').active ? 5 : 50),
			// 		usePopupNav: true
			// 	});
			// });

		// Section transitions.
			if (!skel.vars.mobile
			&&	skel.canUse('transition')) {

				var on = function() {

					// Generic sections.
						$('.main.style1')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

						$('.main.style2')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

					// Work.
						$('#work')
							.scrollex({
								top:		'40vh',
								bottom:		'30vh',
								delay:		50,
								initialize:	function() {

												var t = $(this);

												t.find('.row.images')
													.addClass('inactive');

											},
								terminate:	function() {

												var t = $(this);

												t.find('.row.images')
													.removeClass('inactive');

											},
								enter:		function() {

												var t = $(this),
													rows = t.find('.row.images'),
													length = rows.length,
													n = 0;

												rows.each(function() {
													var row = $(this);
													window.setTimeout(function() {
														row.removeClass('inactive');
													}, 100 * (length - n++));
												});

											},
								leave:		function(t) {

												var t = $(this),
													rows = t.find('.row.images'),
													length = rows.length,
													n = 0;

												rows.each(function() {
													var row = $(this);
													window.setTimeout(function() {
														row.addClass('inactive');
													}, 100 * (length - n++));
												});

											}
							});

					// Contact.
						$('#contact')
							.scrollex({
								top:		'50%',
								delay:		50,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

				};

				var off = function() {

					// Generic sections.
						$('.main.style1')
							.unscrollex();

						$('.main.style2')
							.unscrollex();

					// Work.
						$('#work')
							.unscrollex();

					// Contact.
						$('#contact')
							.unscrollex();

				};

				skel.on('change', function() {

					if (skel.breakpoint('mobile').active)
						(off)();
					else
						(on)();

				});

			}

		// Events.
			var resizeTimeout, resizeScrollTimeout;

			$window
				.resize(function() {

					// Disable animations/transitions.
						$body.addClass('is-resizing');

					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {

						// Update scrolly links.
							$('a[href^="#"]').scrolly({
								speed: 1500,
								offset: $header.outerHeight() - 1
							});

						// Re-enable animations/transitions.
							window.setTimeout(function() {
								$body.removeClass('is-resizing');
								$window.trigger('scroll');
							}, 0);

					}, 100);

				})
				.load(function() {
					$window.trigger('resize');
				});

	});

})(jQuery);
