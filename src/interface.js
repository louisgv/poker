const interfaceEl = document.querySelector('#Interface');

// Flash an info text popup, then retract it
async function showInterface(duration = 3600) {
	await toggleShow(interfaceEl, duration);
}
