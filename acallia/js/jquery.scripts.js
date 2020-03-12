// JavaScript Document

jQuery(document).ready(function(){
	
	jQuery('#featured_desc').jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'both',
		animation: 1500,
		initCallback: feature_carousel_initCallback,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		easing: 'easeInOutExpo'
	});
	
	jQuery('#featured_images').jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'both',
		animation: 1500,
		initCallback: feature_carousel_initCallback,
		itemVisibleInCallback: {onBeforeAnimation: images_itemVisibleInCallback},
		buttonNextHTML: null,
		buttonPrevHTML: null,
		easing: 'easeInOutExpo'
	});

	//Initialize Zebra Table
	
	zebra_table();
	
});

//Functions

function feature_carousel_initCallback($carousel) {
	
	jQuery('#featured_buttons li').bind('click', function() {
		$carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
		$carousel.startAuto(0);
		jQuery('#featured_buttons li.clicked').removeClass('clicked');
		jQuery(this).addClass('clicked');
		return false;
	});

};

function images_itemVisibleInCallback(carousel, item, idx, state) {
	jQuery('#featured_buttons li.clicked').removeClass('clicked');
	jQuery('#featured_buttons li:contains("' + idx + '")').addClass('clicked');
}; 

jQuery(function(){ //smoothscroll
	jQuery('.smooth_scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

function zebra_table(){ //zebra table

	jQuery('tbody tr:nth-child(odd)').addClass('odd');
	
}
