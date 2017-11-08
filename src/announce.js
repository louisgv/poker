const announceEl = document.querySelector('#AnnounceOverlay');

const announceText = announceEl.querySelector('#AnnounceText');

// Flash announcement text popup, then hide it
async function announce(text, duration = 1800, fadeDuration = 500) {
	announceText.innerHTML = text;

	await toggleShow(announceEl, duration);

	await wait(fadeDuration);
}

// Showing dialog modal
async function dialog(text, nextText = "NEXT", fadeDuration = 500) {
	announceText.innerHTML = text;

	const dialogButton = dialogCloseButton(nextText);

	announceEl.appendChild(dialogButton);
	announceEl.classList.add("Show");

	await new Promise((resolve, reject) => {
		dialogButton.addEventListener('click', resolve)
	});

	announceEl.classList.remove("Show");

	await wait(fadeDuration);

	dialogButton.remove();
}

// Generate the dialog close button
function dialogCloseButton(text = "NEXT") {
	const button = createElementWithClass('button', 'DialogButton');

	button.innerHTML = `
		${text}
	`

	return button;
}
