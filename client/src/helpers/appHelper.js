/* this helper contains useful functions */

// execute function with callback
export function withCallback(func, callback) {
	func();
	if (Array.isArray(callback)) {
		for (let c of callback) {
			c();
		}
	} else {
		callback();
	}
}

// detecting scrollDirection
export function scrollDirection() {
	return;
}

// scroll page to top
export function scrollToTop() {
	window.scrollTo(0, 0);
}
