const footerEl = document.querySelector('footer')

const copyrightEl = document.querySelector('#Copyright');

const hidecopyrightEl = document.querySelector('#HideCopyright');

// Change the state of the copyright notice based on its new state
function changeCopyright(isShow, newState, background, color) {
	copyrightEl.style.opacity = isShow
		? 1
		: 0;
	copyrightEl.style.pointerEvents = isShow
	 	? "all"
		: "none";

	footerEl.style.zIndex = isShow
		? 9999
		: 0;

	hidecopyrightEl.innerHTML = newState;
	hidecopyrightEl.style.background = background;
	hidecopyrightEl.style.color = color;
	setData(STOREKEY.COPYRIGHT_STATE, newState);
}

// Switching between show and hide copyright element
function toggleCopyRight() {
	if (getData(STOREKEY.COPYRIGHT_STATE) === "show") {
		changeCopyright(true, "hide", "yellow", "black");
	} else {
		changeCopyright(false, "show", "#222", "white");
	}
}

// Restore the state of copyright footer from localStorage
function restoreCopyRightState() {
	if (getData(STOREKEY.COPYRIGHT_STATE) === "show") {
		changeCopyright(false, "show", "#222", "white");
	} else {
		changeCopyright(true, "hide", "yellow", "black");
	}
}

hidecopyrightEl.addEventListener('click', toggleCopyRight);

window.addEventListener('load', restoreCopyRightState);
