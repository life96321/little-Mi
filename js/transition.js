! function(a) {
	a(function() {
		a.support.transition = (function() {
			var b = (function() {
				var e = document.createElement("bootstrap"),
					d = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					},
					c;
				for(c in d) {
					if(e.style[c] !== undefined) {
						return d[c]
					}
				}
			}());
			return b && {
				end: b
			}
		})()
	})
}(window.jQuery);