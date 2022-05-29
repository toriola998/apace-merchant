(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);


const element = document.querySelector('.swiper-slide');
element.classList.add('animate__animated', 'animate__zoomIn');

element.addEventListener('animationend', () => {
  element.classList.add('animate__animated', 'animate__zoomOut');
});