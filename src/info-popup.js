const infoPopupEl = document.querySelector('#InfoPopup');

const infoPopupText = infoPopupEl.querySelector('#InfoText');

// Flash an info text popup, then retract it
async function info(text, duration = 3600) {
	infoPopupText.innerHTML = text;

	await toggleShow(infoPopupEl, duration);
}
