/*! Swipebox v1.4.1 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
(function(window, document, $, undefined) {
		$.swipebox = function(elem, options) {
			var ui, defaults = {
					useCSS: true,
					useSVG: false,
					initialIndexOnArray: 0,
					removeBarsOnMobile: true,
					hideCloseButtonOnMobile: false,
					hideBarsDelay: 3000,
					videoMaxWidth: 1140,
					vimeoColor: "cccccc",
					beforeOpen: null,
					afterOpen: null,
					afterClose: null,
					nextSlide: null,
					prevSlide: null,
					loopAtEnd: false,
					autoplayVideos: false,
					queryStringData: {},
					toggleClassOnLoad: ""
				},
				plugin = this,
				elements = [],
				$elem, selector = elem.selector,
				$selector = $(selector),
//				isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
//				isTouch = isMobile !== null || document.createTouch !== undefined || ("ontouchstart" in window) || ("onmsgesturechange" in window) || navigator.msMaxTouchPoints,
//				supportSVG = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
//				winWidth = window.innerWidth ? window.innerWidth : $(window).width(),
//				winHeight = window.innerHeight ? window.innerHeight : $(window).height(),
				currentX = 0,
//				html = '<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>						<a id="swipebox-close"></a>					</div>			</div>';
//			plugin.settings = {};
			getNext: function() {
					var $this = this,
						src, index = $("#swipebox-slider .slide").index($("#swipebox-slider .slide.current"));
					if(index + 1 < elements.length) {
						src = $("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");
						$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src", src);
						index++;
						$this.setSlide(index);
						$this.preloadMedia(index + 1);
						if(plugin.settings.nextSlide) {
							plugin.settings.nextSlide()
						}
					} else {
						if(plugin.settings.loopAtEnd === true) {
							src = $("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");
							$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src", src);
							index = 0;
							$this.preloadMedia(index);
							$this.setSlide(index);
							$this.preloadMedia(index + 1);
							if(plugin.settings.nextSlide) {
								plugin.settings.nextSlide()
							}
						} else {
							$("#swipebox-overlay").addClass("rightSpring");
							setTimeout(function() {
								$("#swipebox-overlay").removeClass("rightSpring")
							}, 500)
						}
					}
				},
				getPrev: function() {
					var index = $("#swipebox-slider .slide").index($("#swipebox-slider .slide.current")),
						src;
					if(index > 0) {
						src = $("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");
						$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src", src);
						index--;
						this.setSlide(index);
						this.preloadMedia(index - 1);
						if(plugin.settings.prevSlide) {
							plugin.settings.prevSlide()
						}
					} else {
						$("#swipebox-overlay").addClass("leftSpring");
						setTimeout(function() {
							$("#swipebox-overlay").removeClass("leftSpring")
						}, 500)
					}
				},
				nextSlide: function() {},
				prevSlide: function() {},
				closeSlide: function() {
					$("html").removeClass("swipebox-html");
					$("html").removeClass("swipebox-touch");
					$(window).trigger("resize");
					this.destroy()
				},
				destroy: function() {
					$(window).unbind("keyup");
					$("body").unbind("touchstart");
					$("body").unbind("touchmove");
					$("body").unbind("touchend");
					$("#swipebox-slider").unbind();
					$("#swipebox-overlay").remove();
					if(!$.isArray(elem)) {
						elem.removeData("_swipebox")
					}
					if(this.target) {
						this.target.trigger("swipebox-destroy")
					}
					$.swipebox.isOpen = false;
					if(plugin.settings.afterClose) {
						plugin.settings.afterClose()
					}
				}
		};
		plugin.init()
	}; $.fn.swipebox = function(options) {
		if(!$.data(this, "_swipebox")) {
			var swipebox = new $.swipebox(this, options);
			this.data("_swipebox", swipebox)
		}
		return this.data("_swipebox")
	}
}(window, document, jQuery));